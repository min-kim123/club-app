"use client";
import { useState } from "react";
import { Button } from "./ui/Button";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { auth } from "@/firebase/config";
import { Icons } from "./ui/Icons";
import { UserAuth } from "@/firebase/context/AuthContext";
export default function AuthFirebase() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async (e) => {
    const {googleSignIn, user} = UserAuth();
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

  return (
    <Button onClick={loginWithGoogle} isLoading={isLoading}>
      {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
      Google
    </Button>
  );
}
