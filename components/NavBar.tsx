import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserAvatar } from "./UserAvatar";
import Image from "next/image";
import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Avatar, AvatarImage } from "./ui/Avatar";

export default async function NavBar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  //get profile account associated w user.id
  let schoolPath = null;
  if (session) {
    console.log("session");
    const { data: userProfile } = await supabase
      .from("profiles")
      .select("*") // selects all columns, adjust if needed
      .eq("id", session!.user.id)
      .single();
    console.log(userProfile);
    schoolPath = userProfile?.school_slug;
    console.log("schoolpath", schoolPath);
  }
  console.log(schoolPath);
  //where to take user if they are not logged in?
  //

  //get user's avatar url
  const { data } = await supabase.from("profiles").select("*, profiles(*)");

  //make async so we can get session for user
  // const session = await getServerSession(authOptions);
  return (
    <div>
      {session ? (
        <div className="flex justify-between">
          <div className="flex items-end ">
            <div className="text-xl space-x-4  ml-3">
              {" "}
              {/* Align "netly" to the left */}
              <Link href="/">netly</Link>
            </div>

            <Link
              href={`/${schoolPath}/groups`}
              className="flex flex-col items-center ml-6"
            >
              <Icons.groups />
              <p className="text-xs">Groups</p>
            </Link>

            <Link
              href={`/${schoolPath}/events`}
              className="flex flex-col items-center ml-5"
            >
              <Icons.events />
              <p className="text-xs">Events</p>
            </Link>
          </div>
          <div className="flex items-end px-6">
            <div className="relative flex flex-col items-center">
              <Icons.notifs
                className="absolute  "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p className="text-xs">Notifications</p>
            </div>
            <div className="ml-3">
              <Link href="/inbox" className="flex flex-col items-center mt-2px">
                <Icons.inbox />
                <p className="text-xs">Inbox</p>
              </Link>
            </div>
            {/* Profile */}
            <div className="ml-5">
              <Link href="/profile" className="flex flex-col items-center">
                <Avatar
                  circle={true}
                  height={"10"}
                  width={"10"}
                  className="w-5"
                >
                  <AvatarImage
                    src={session!.user.user_metadata.avatar_url}
                    alt="user avatar"
                  />
                </Avatar>

                <p className="text-xs">Profile</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div>
            {/* link to log in page*/}
            <Link
              href="/sign-in"
              className="hover:text-brand text-md underline underline-offset-4 mr-2"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
