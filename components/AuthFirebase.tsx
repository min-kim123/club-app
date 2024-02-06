"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { Icons } from "./ui/Icons";
import { useAuth } from "@/firebase/context/AuthContext";
import { addDoc, collection } from "firebase/firestore";



export default function AuthFirebase() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, googleSignIn } = useAuth();
  const loginWithGoogle = async (e) => {
    
    try {
      setIsLoading(true);

      await googleSignIn();
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Error",
      //   description: "There was an error logging in with Google",
      //   variant: "destructive",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  async function addUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <Button onClick={addUser}>add user</Button>

      <Button onClick={loginWithGoogle} isLoading={isLoading}>
      {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
      Google
    </Button>
    </div>
    
  );
}
