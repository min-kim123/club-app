import { Tables } from "@/types/database.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

interface EventCardProps {
  eventData: Tables<"events">;
}

export default function EventCard({ eventData }: EventCardProps) {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-col">
          <CardTitle className="mt-3">{eventData.name}</CardTitle>
          <div>{eventData.date}</div>
          <div> {eventData.location}</div>
          <CardDescription>{eventData.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
