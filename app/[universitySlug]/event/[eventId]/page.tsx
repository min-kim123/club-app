import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { format } from "date-fns";
import { cookies } from "next/headers";


interface PageProps {
  params: {
    eventId: string;
    universitySlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  //fetch the event

  const supabase = createServerComponentClient<Database>({ cookies });
  //get the events associated w same group

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.eventId)
    .single();

  console.log("evemt:",event);
  return (
    <div>
      {event.name}
      <div>Date: {format(event?.time, '	PPPP')}</div>
      <div>Time: {format(event?.time, 'p')}</div>

  

      <div>Location: {event?.location}</div>

      <div>{event?.description}</div>
      <div>Posted {format(event?.created_at, '	PPPP')}</div>
    </div>
  );
}
