import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import { UserAvatar } from "./UserAvatar";

export default async function NavBar() {
  //make async so we can get session for user
  const session = await getServerSession(authOptions);
  return (
    <div className="flex ">
      <div className="flex items-end ">
        <div className="text-xl space-x-4 ">
          {" "}
          {/* Align "netly" to the left */}
          <Link href="/">netly</Link>
        </div>

        <Link href="/groups" className="flex flex-col items-center">
          <Icons.groups />
          <p className="text-xs">Groups</p>
        </Link>

        <Link href="/events" className="flex flex-col items-center">
          <Icons.events />
          <p className="text-xs">Events</p>
        </Link>
      </div>

      <div className="flex items-end">
        <div className="relative flex flex-col items-center">
          <Icons.notifs className="absolute  "  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
          <p className="text-xs">Notifications</p>
        </div>

        <Link href="/inbox" className="flex flex-col items-center mt-2px">
          <Icons.inbox />
          <p className="text-xs">Inbox</p>
        </Link>
        {/* Profile */}
        <Link href="/profile" className="flex flex-col items-center">
          <UserAvatar
            user={{
              name: session?.user?.name || null,
              image: session?.user?.image || null,
            }}
            className="h-6 w-6"
          />
          <p className="text-xs">Profile</p>
        </Link>
      </div>
    </div>
  );
}
