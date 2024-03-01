import LikeButton from "@/components/LikeButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getgroups } from "process";
export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

  const { data } = await supabase
    .from("groups")
    .select("*, profiles(*), likes(user_id)");
  const groups =
    data?.map((group) => ({
      ...group,
      profiles: Array.isArray(group.profiles)
        ? group.profiles[0]
        : group.profiles,
      user_has_liked_tweet: !!group.likes.find(
        (like) => like.user_id === session.user.id
      ),
      likes: group.likes.length,
    })) ?? [];

  return (
    <div>
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Groups
      </div>

      <div className="flex flex-col items-start pt-4 space-y-2 px-6">
        {groups?.map((group) => (
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
        ))}
      </div>
    </div>
  );
}
