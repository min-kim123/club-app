import Link from "next/link";

export default function NavBar() {
  //make async so we can get session for user
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 ">
      <Link href='/'>netly</Link>
      </div>
    </div>
  );
}
