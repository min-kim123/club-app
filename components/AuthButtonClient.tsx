"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthButtonClient({
  session,
}: {
  session: Session | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();//this is here for when users can access all other pages while not authenticated
  };

  const handleSignIn = async () => {
    console.log('handlesigin')
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    });

  };

  return session ? (
    <button onClick={handleSignOut}>Logout</button>
  ) : (
    <button onClick={handleSignIn}>Login</button>
  );
}
