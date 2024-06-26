import { User, createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default function NewGroupForm({ user }: { user: User }) {
  const addGroup = async (formData: FormData) => {
    "use server";
    const name = String(formData.get("name"));
    const supabase = createServerActionClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser(); //fetch currently logged in user
    if (user) {
      const {data: groupData} = await supabase.from("groups").insert({name}).select().single();
      console.log("groupdata: " ,groupData)
      console.log("groupdata.id",groupData.id)
      // await supabase.from("groups_users").insert({group_id: groupData.id, user_id: user.id});
      const { error: joinTableError } = await supabase
      .from("groups_users")
      .insert({ group_id: groupData.id, user_id: user.id });
    }
  };
  return (
    <div>
      <form action={addGroup}>
        <input name="name" className="bg-blue-500" />
      </form>
    </div>
  );
}
