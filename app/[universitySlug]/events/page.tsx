import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    universitySlug: string;
  };
}



export default async function Page({ params }: PageProps) {
  //fetch the event

  const supabase = createServerComponentClient<Database>({ cookies });
  //get the events associated w same group
  const { data: events } = await supabase
  .from("events")
  .select("*")
  .eq("id", params.universitySlug)


  return (
    <div>
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Events
      </div>
      <div>
        {(events?.map(e) => )}
      </div>
      <div className="flex flex-col items-start pt-4 space-y-2 px-6"></div>
    </div>
  )
}