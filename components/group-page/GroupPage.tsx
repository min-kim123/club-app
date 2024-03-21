import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Avatar, AvatarImage } from "../ui/Avatar";
import GroupSectionCard from "./GroupSectionCard";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function GroupPage({ params }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  //fetch group
  const { data: group} = await supabase
    .from("groups")
    .select("*")
    .eq("slug", params.groupSlug)
    .eq("university_slug", params.universitySlug)
    .single();

  //fetch sections associated w group
  const { data, error } = await supabase
    .from("sections")
    .select("*")
    .eq("group_id", group.id);

  return (
    <div>
      <div className="flex">
        <Avatar circle={false} height={"10"} width={"10"}>
          <AvatarImage src={group.image} alt="group image" />
        </Avatar>
        <div>
          <div className="text-3xl">{group.name}</div>
          <div>Founded //// /// Members</div>
        </div>
      </div>
      <div className="text-s">{group.description}</div>
      {/*  */}


    </div>
  );
}
