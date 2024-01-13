import LogOutButton from "@/components/LogOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("Session data:", session);
  return (
    <div>
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Dashboard
      </div>
      <div className="flex flex-col items-start pt-4 space-y-2 px-6">

         <LogOutButton/>
      <div>
        {session.user.name}
        {session.user.email}

      </div>
      </div>
     
    </div>
  )
}