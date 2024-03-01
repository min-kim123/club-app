import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default function NewGroupForm() {
  const addGroup = async (formData: FormData) => {
    "use server";
    const name = String(formData.get("name"));
    const supabase = createServerActionClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();//fetch currently logged in user
    if (user) {
      await supabase.from("groups").insert({ name, user_id: user.id});

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
