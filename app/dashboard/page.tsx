import LogOutButton from "@/components/LogOutButton";
import { useAuth } from "@/firebase/context/AuthContext";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  // const session = await getServerSession(authOptions);
  const { user } = useAuth();
  console.log(user);
  
  // console.log("Session data:", session);
  return (
    <div>
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Dashboard
      </div>
      <div className="flex flex-col items-start pt-4 space-y-2 px-6">

         <LogOutButton/>
      <div>
      {/* {session?.user.name} */}
      {user}

        {/* {session?.user.email} */}
        {/* {session?.user.image} */}



      </div>
      </div>
     
    </div>
  )
}