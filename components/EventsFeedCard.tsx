import { Tables } from "@/types/database.types";

import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/Card";

type EventCardProps = {
  group: Tables<"groups">;
};
export default function EventsFeedCard({ group }: EventCardProps) {
  return (
    <div>
      <Link href={`/${group.university_slug}/groups/${group.slug}`}>
        <Card className="h-[150px] flex">
          <Avatar circle={false} height={"10"} width={"10"}>
            <AvatarImage src={group.image ?? undefined} alt="group image" />
          </Avatar>
          <CardHeader className="pb-2 pt-5">
            <CardTitle>{group.name} </CardTitle>
            <CardDescription className="overflow-y-auto">
              {group.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
