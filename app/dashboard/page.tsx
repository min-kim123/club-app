import LogOutButton from "@/components/LogOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("Session data:", session);
  return (
    <div>
      <LogOutButton/>
      <div>
        {session.user.name}
        {session.user.email}

      </div>
    </div>
  )
}