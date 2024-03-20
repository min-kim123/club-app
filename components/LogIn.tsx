import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
// import AuthFirebase from "./AuthFirebase";
import { cookies } from "next/headers";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import AuthButtonClient from "./AuthButtonClient";
import AuthButtonServer from "./AuthButtonServer";

export default async function LogIn() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // if (session) {
  //   redirect("/");
  // }

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] mt-10">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight ">Sign In</h1>
      <AuthButtonServer />
      </div>

    </div>
  );
}
