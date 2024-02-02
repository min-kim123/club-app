import Image from "next/image";
import LogIn from "@/components/LogIn";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import { UserAuth } from "@/firebase/context/AuthContext";
import Link from "next/link";

export default async function Home() {
  const {user, logOut} = UserAuth();
//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//           console.log("uid", uid)
//         } else {
//           // User is signed out
//           // ...
//           console.log("user is logged out")
//         }
//       });
     
// }, [])
  // if (session) {
  //   return redirect("/dashboard");
  // }

  const handleSignOut = async() => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <main>
      {user?.displayName? (<button onClick={handleSignOut}>Logout</button>):(<Link href='/signin'>Sign in</Link>)}
      {/* {session ? <h1>You are logged in</h1> : <h1>please log in </h1>} */}
      <LogIn />
    </main>
  );
}
