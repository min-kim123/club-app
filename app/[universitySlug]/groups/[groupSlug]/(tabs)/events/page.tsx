import EventCard from "@/components/group-page/EventCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}
export default async function Page({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  //get the events associated w same group
  //first fetch group
  const { data: group, error } = await supabase
    .from("groups")
    .select("*")
    .eq("slug", params.groupSlug)
    .eq("university_slug", params.universitySlug)
    .single();

  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("group_id", group.id);

  console.log("events",events);

  return (
    <div>
      {events?.map((event) => (
        <Link key={event.id} href={`/${params.universitySlug}/${event.id}`}>
        
        <EventCard  eventData={event} />
        </Link>
      ))}
    </div>
  );
}
