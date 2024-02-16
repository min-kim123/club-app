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

export default function Home() {
  // const { user, login } = useAuth()



  const handleSignOut = async () => {
    try {
      // await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {/* {user?.displayName? (<button onClick={handleSignOut}>Logout</button>):(<Link href='/signin'>Sign in</Link>)} */}
      {/* {session ? <h1>You are logged in</h1> : <h1>please log in </h1>} */}
      {/* <LogIn /> */}

    </main>
  );
}
