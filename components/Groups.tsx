'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LikeButton from "./LikeButton";
import { table } from "console";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Groups({ groups }: { groups: GroupWithAuthor[] }) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  useEffect(() => {
    console.log("asdf")
    const channel = supabase
      .channel("realtime tweets")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "groups",
        },
        (payload) => {
          console.log("sdfghjhgdfsds")
          console.log(payload)
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);

  return groups?.map((group) => (
    <div key={group.id}>
      <p>
        {group?.profiles?.name}
        {group.name}
      </p>
      <LikeButton group={group} />
      {/* Type '{ group: { user_has_liked_tweet: boolean; likes: number; created_at: string; id: string; name: string; user_id: string; profiles: { avatar_url: string | null; id: string; name: string; } | null; }; }' is not assignable to type 'IntrinsicAttributes & { groups: GroupWithAuthor; }'.
Property 'group' does not exist on type 'IntrinsicAttributes & { groups: GroupWithAuthor; }'. Did you mean 'groups'?ts(2322)

to fix this error -> 16*/}
    </div>
  ));
}
