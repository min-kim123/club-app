"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { useState } from "react";
import { Icons } from "./ui/Icons";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh(); //this is here for when users can access all other pages while not authenticated
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);

      console.log("handlesigin");
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000/auth/callback",
        },
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {session ? (
        <Button onClick={handleSignOut}>Google</Button>
      ) : (
        <Button onClick={handleSignIn}>
          {" "}
          <Icons.google className="h-4 w-4 mr-2 " />
          Google
        </Button>
      )}
    </div>
  );
}
