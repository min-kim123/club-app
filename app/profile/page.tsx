import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page () {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase
  .from("profiles")
  .select("*, profiles(*)");

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //find the user profile that corresponds to auth.user
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
      
      <h1>{}</h1>
    </div>
  )
}
//todo: uuid for profile linked in profile link
//retrieve user profile info from 
//model DB: user info includes groups, 