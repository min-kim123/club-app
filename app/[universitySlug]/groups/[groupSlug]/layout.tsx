import GroupPage from "@/components/group-page/GroupPage";
import Link from "next/link";
interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}

const GroupTabs: React.FC<PageProps & React.PropsWithChildren<{}>> = ({
  params,
  children,
}) => {
  return (
    <div className="m-5 flex flex-col">
      <GroupPage params={params} />
      <div className="flex space-x-4">
        <Link href={`/${params.universitySlug}/groups/${params.groupSlug}`}>
          Overview
        </Link>
        <Link
          href={`/${params.universitySlug}/groups/${params.groupSlug}/events`}
        >
          Events
        </Link>
        <Link
          href={`/${params.universitySlug}/groups/${params.groupSlug}/board`}
        >
          Board
        </Link>
        <Link
          href={`/${params.universitySlug}/groups/${params.groupSlug}/join`}
        >
          Join
        </Link>
        
      </div>
      <div>{children}</div>
    </div>
  );
};

export default GroupTabs;
