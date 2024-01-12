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
      <div className="flex">
        <div className="text-xl space-x-4">
          {" "}
          {/* Align "netly" to the left */}
          <Link href="/">netly</Link>
        </div>


        <Link href='/groups'>
          <Icons.groups />
          <p className="">Groups</p>
        </Link>

        <Link href="/events">
          <Icons.events />
          <p className="">Events</p>
        </Link>
      </div>

      <div className="flex">
        <div className="">
          <Icons.notifs />
          <p className="">Notifications</p>
        </div>
        <Link href="/inbox">
          <Icons.inbox />
          <p className="">Inbox</p>
        </Link>
        {/* Profile */}
        <Link href="/profile">
          <UserAvatar
            user={{
              name: session?.user?.name || null,
              image: session?.user?.image || null,
            }}
            className="h-8 w-8"
          />
          <p className="">Profile</p>
        </Link>

      </div>
    </div>
  );
}
