import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: userProfile } = await supabase
    .from("users")
    .select("*") // selects all columns, adjust if needed
    .eq("id", session!.user.id)
    .single(); // filters rows where the user_id column matches the userId

  const { data: groupsUsers } = await supabase
    .from("board_groups_users")
    .select("*") // selects all columns, adjust if needed
    .eq("user_id", session!.user.id); // filters rows where the user_id column matches the userId

  console.log("groupsUsers", groupsUsers);




  //retrieve all group data that correspond to the group ids
  let groupIds = null;

  let groups = null;
  let groupid = null;

  if (groupsUsers) {//for each groupsUsers, fetch the group data
    groupIds = groupsUsers.map((gp) => gp.group_id);
    groupid = groupIds[0];
    console.log("groupIds",groupIds);
    const response = await supabase
      .from("groups")
      .select("*")
      .eq("group_id", groupIds);

    if (response.error) {
      console.log("error");
    } else {
      groups = response.data;
      console.log("groups:", groups);
    }
  }

  // const id = await supabase
  // .from("groups")
  // .select("*")
  // .eq("group_id", groupid);

  // console.log(id)

  //need to get all the groups the user is associated with.
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

      {/* 
      <h1 className="font-bold">Board</h1>
      <ul>
        {createdGroups!.map((g) => (
          <li key={g!.id}>{g.name}</li>
        ))}
      </ul>
*/}
      <h1 className="font-bold">Member</h1>
      <ul>
        {groups ? (
          <div>{groups.map((group) => group.id)}</div>
        ) : (
          <div>No groups joined</div>
        )}
      </ul>
    </div>
  );
}
//todo: uuid for profile linked in profile link
//retrieve user profile info from
//model DB: user info includes groups,

//
