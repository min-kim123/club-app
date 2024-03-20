import Image from "next/image";
import LogIn from "@/components/LogIn";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/config";
// import { useAuth } from "@/firebase/context/AuthContext";
import Link from "next/link";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/Button";
import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  // const { user, login } = useAuth()

  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: tweets } = await supabase.from("groups").select();

  return (
    <main>
      <pre>{JSON.stringify(tweets, null, 2)}</pre>
      {/* {user?.displayName? (<button onClick={handleSignOut}>Logout</button>):(<Link href='/signin'>Sign in</Link>)} */}
      {/* {session ? <h1>You are logged in</h1> : <h1>please log in </h1>} */}
      {/* <LogIn /> */}
    </main>
  );
}
