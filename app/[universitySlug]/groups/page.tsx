import GroupsFeed from "@/components/GroupsFeed";
import LikeButton from "@/components/LikeButton";
import NewGroupForm from "@/components/NewGroupForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    universitySlug: string;
  };
}
export default async function Page({ params }: PageProps) {
  const universitySlug = params.universitySlug
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //fetch the university slug


  const { data } = await supabase
  .from("groups")
  .select("*").eq("university_slug", universitySlug);
  
  console.log("data",data)

// const groups =
//   data?.map((group) => ({
//     ...group,
//     profiles: Array.isArray(group.profiles)
//       ? group.profiles[0]
//       : group.profiles,
//     user_has_liked_tweet: !!group.likes.find(
//       (like) => like.user_id === session?.user.id
//     ),
//     likes: group.likes.length,
//   })) ?? [];

  

  return (
    <div>
      
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        Groups
      </div>
      {session ? (
        <div>
          <NewGroupForm user={session!.user} />
        </div>
      ) : (
        <div>
          
        </div>
      )}

      <div className="flex flex-col items-start pt-4 space-y-2 px-6">
        <GroupsFeed groups={data} />
      </div>
    </div>
  );
}
