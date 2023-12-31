'use client';


import { useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logOut = async () => {
    setIsLoading(true);

    try {
      setIsLoading(true);

      await signOut({ callbackUrl: 'http://localhost:3000' });
    } catch (error) {
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
    <Button onClick={logOut}>Log out</Button>
  )
}