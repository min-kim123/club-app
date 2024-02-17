import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getgroups } from "process";
export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

  const { data: groups } = await supabase.from("groups").select('*');


  return (
    <div>
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Groups
      </div>
      
      <div className="flex flex-col items-start pt-4 space-y-2 px-6"><pre>{JSON.stringify(groups, null, 2)}</pre></div>
    </div>
  );
}
