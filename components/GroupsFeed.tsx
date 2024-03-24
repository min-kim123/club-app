// "use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LikeButton from "./LikeButton";
import { table } from "console";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GroupsFeedCard from "./GroupsFeedCard";
import SearchBar from "./SearchBar";

export default async function Groups({ groups }) {
  // const router = useRouter();

  // const supabase = createClientComponentClient();

  // useEffect(() => {
  //   console.log("asdf");
  //   const channel = supabase
  //     .channel("realtime tweets")
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "*",
  //         schema: "public",
  //         table: "groups",
  //       },
  //       (payload) => {
  //         console.log("sdfghjhgdfsds");
  //         console.log(payload);
  //         router.refresh();
  //       }
  //     )
  //     .subscribe();

  //   return () => {
  //     supabase.removeChannel(channel);
  //   };
  // }, [supabase, router]);

  return (
    <div>
      <SearchBar/>
      {groups?.map((group) => (
        <div key={group.id} className="w-full">
          <GroupsFeedCard group={group} />
        </div>
      ))}
    </div>
  );
}
