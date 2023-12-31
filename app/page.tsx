import Image from "next/image";
import LogIn from "@/components/LogIn";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/dashboard');
  }


  return (
    <main>
      {session ? (<h1>You are logged in</h1>):(<h1>please log in </h1>)}
      <LogIn />
    </main>
  );
}
