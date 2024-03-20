import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { groupCollapsed } from "console";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //fetching the groups the user created
  const { data: createdGroups } = await supabase
    .from("groups")
    .select("*")
    .eq("user_id", session!.user.id);

  //retrieve all the id's that correspodn to the session.user.id from groups_profiles
  const { data: groupsProfiles } = await supabase
    .from("groups_users")
    .select("*") // selects all columns, adjust if needed
    .eq("profiles_id", session?.user.id); // filters rows where the user_id column matches the userId

  //get the user's profile table from session.user.id
  const { data: userProfile } = await supabase
    .from("profiles")
    .select("*") // selects all columns, adjust if needed
    .eq("id", session!.user.id)
    .single(); // filters rows where the user_id column matches the userId

  //find the user profile that corresponds to auth.user
  // const groups =
  //   data?.map((group) => ({
  //     ...group,
  //     profiles: Array.isArray(group.profiles)
  //       ? group.profiles[0]
  //       : group.profiles,
  //     user_has_liked_tweet: !!group.likes.find(
  //       (like) => like.user_id === session.user.id
  //     ),
  //     likes: group.likes.length,
  //   })) ?? [];

  //retrieve all group data that correspond to the group ids
  const groupIds = groupsProfiles!.map((gp) => gp.group_id);

  const { data: groups, error: groupsError } = await supabase
    .from("groups")
    .select("*") // Adjust according to the details you need
    .in("id", groupIds);

  //need to get all the groups the user is associated with.

  //created:

  //memberships

  return (
    <div>
      <div className="flex">
        <div>
        <Avatar className="w-20 h-20">
          <AvatarImage
            src={session!.user.user_metadata.avatar_url}
            alt="user avatar"
            
          />
        </Avatar>

        </div>
        <div>{userProfile.name}</div>
      </div>

      <h1 className="font-bold">Board</h1>
      <ul>
        {createdGroups!.map((g) => (
          <li key={g!.id}>{g.name}</li>
        ))}
      </ul>

      <h1 className="font-bold">Member</h1>
      <ul>
        {createdGroups!.map((g) => (
          <li key={g!.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}
//todo: uuid for profile linked in profile link
//retrieve user profile info from
//model DB: user info includes groups,



// 