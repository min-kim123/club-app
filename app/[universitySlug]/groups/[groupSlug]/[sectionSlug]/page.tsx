import JoinLeaveButton from "@/components/group-page/JoinLeaveButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
    sectionSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  //fetch group

  const { data: group_id } = await supabase
    .from("groups")
    .select("id")
    .eq("slug", params.groupSlug)
    .eq("university_slug", params.universitySlug)
    .single();

  console.log("group_id", group_id);

  if (!group_id) {
    return notFound();
  }

  const { data: section } = await supabase
    .from("sections")
    .select("*")
    .eq("group_id", group_id.id)
    .eq("slug", params.sectionSlug)
    .single();

  if (!section) {
    return notFound();
  }

  return (
    <div>
      <div className="flex">
        {/* <Avatar circle={false} height={"10"} width={"10"}>
          <AvatarImage src={group.image} alt="group image" />
        </Avatar> */}
        <div>
          <div className="text-3xl">{section.name}</div>
        </div>
      </div>
      <div className="text-s">{section.description}</div>
      {/*  */}
      {/* <JoinLeaveButton sectionId={section.id} /> */}
    </div>
  );
}
