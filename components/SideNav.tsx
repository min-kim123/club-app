import Link from "next/link";

export default function SideNav() {
  return (
    <div className="fixed top-0 bottom-0 inset-x-0 h-full bg-white  w-14 mt-10 rounded-tr-lg z-10">
      <div className="left-0  text-xs justify-between mt-10">

          <div className="">
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div>
            <Link href="/dashboard">My Groups</Link>
          </div>
          <div>
            <Link href="/forms">Forms</Link>
          </div>
        </div>

    </div>
  );
}
