import GroupPage from "@/components/group-page/GroupPage";
import GroupSectionCard from "@/components/group-page/GroupSectionCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}
//fetch the group and send it to grouppage component

export default async function Page({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data:group } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", params.groupSlug)
    .eq("university_slug", params.universitySlug)
    .single();

  //fetch sections associated w group
  const { data : sectionData } = await supabase
    .from("sections")
    .select("*")
    .eq("group_id", group.id);

  return (
    <div>
      {/* //map over sections associated w group*/}
      <div className="flex">
        {sectionData?.map((section) => (
          <GroupSectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
