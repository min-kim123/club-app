import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}
export default async function Page({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  // fetch group
  const { data: groupData, error: groupError } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", params.groupSlug)
    .eq("university_slug", params.universitySlug)
    .single();

  //fetch user data with a position from groups_users table
  const { data: boardData, error: boardError } = await supabase
    .from("groups_users")
    .select("*")
    .eq("group_id", groupData.id)
    .not("position", "is", null);
  console.log(boardData);

  //fetch the user profiles
  let usersData = null;
  if (boardData && boardData.length > 0) {
    console.log("not 0");
    const userIds = boardData.map((row) => row.user_id);
    const response = await supabase
      .from("users")
      .select("*")
      .in("id", userIds);
    usersData = response.data; // Assign the data to profilesData
    if (response.error) {
      console.error("Error fetching users:", response.error);
    }
  }

  return (
    <div>
      {usersData ? (
        usersData.map((profile) => (
          <div key={profile.id}>
            <Card className="w-40 h-52">
              <Avatar circle={true} height={"10"} width={"10"} className="w-5">
                <AvatarImage src={profile.avatar_url} alt="user avatar" />
              </Avatar>

              <div>{profile.name}</div>
              <div>{profile.first_major}</div>
              <div> {profile.second_major}</div>
              <div> {profile.grad_year}</div>
            </Card>
          </div>
        ))
      ) : (
        <div>No Board Members</div>
      )}
    </div>
  );
}
