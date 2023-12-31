"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { Icons } from "./ui/Icons";

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      setIsLoading(true);

      await signIn("google");
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
    <div>
      <Button onClick={loginWithGoogle} isLoading={isLoading}
      >
        {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Google
      </Button>
    </div>
  );
}
