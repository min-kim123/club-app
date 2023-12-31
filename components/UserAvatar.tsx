import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { User } from "next-auth";
import Image from "next/image";
import { Icons } from "./ui/Icons";

interface UserAvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar= ({ user }:UserAvatarProps) => {
  return (
    <Avatar>
      {user.image ? (
        <div>
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4"/>
        </AvatarFallback>
      )}
    </Avatar>
  );
};
