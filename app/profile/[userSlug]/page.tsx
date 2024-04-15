import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    userSlug: string;
  };
}
export default async function Page({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  //id corresponding to user slug equals session.user.id?
  const { data: userData, error } = await supabase
    .from("users")
    .select("*")
    .eq("slug", params.userSlug)
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return (
    <div>
      {userData.id}
      <div>{userData.name}</div>
    </div>
  );
}
