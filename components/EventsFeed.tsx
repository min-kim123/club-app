// "use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LikeButton from "./LikeButton";
import { table } from "console";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GroupsFeedCard from "./GroupsFeedCard";
import SearchBar from "./SearchBar";
import EventsFeedCard from "./EventsFeedCard";

export default async function EventsFeed({ groups }) {


  return (
    <div>
      <SearchBar/>
      {groups?.map((group) => (
        <div key={group.id} className="w-full">
          <EventsFeedCard group={group} />
        </div>
      ))}
    </div>
  );
}
