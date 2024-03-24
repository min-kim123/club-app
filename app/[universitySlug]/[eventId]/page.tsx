import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
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

  console.log(event);
  return (
    <div>
      {event.name}
      <div>{event?.date}</div>
      <div>{event?.time}</div>
      <div>{event?.location}</div>

      <div>{event?.description}</div>
    </div>
  );
}
