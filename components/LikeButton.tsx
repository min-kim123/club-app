"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


export default function LikeButton({ groups }: {groups: GroupWithAuthor}) {
  const router = useRouter();
  // console.log(group);

  const handleLikes = async () => {
    const supabase = createClientComponentClient<Database>();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      if (group.user_has_liked_tweet) {
        await supabase
          .from("likes")
          .delete()
          .match({ user_id: user.id, group_id: group.id });
      }
      else {
        await supabase
        .from("likes")
        .insert({ user_id: user.id, group_id: group.id });
      }
      router.refresh();
    }
  };
  return <button onClick={handleLikes}>{group.likes} Likes</button>;
}
