import GroupSectionCard from "./GroupSectionCard";

export default function GroupPage() {
  //
  return (
    <div className="m-5">
      <div className="text-3xl">Group Name</div>
      <div>Founded //// /// Members</div>
      <div className="text-s">
        description description description description description description
        description description
      </div>
      <div className="text-s">Overview</div>

      {/* //map over sections */}
      <div className="flex">
        <GroupSectionCard />
        <GroupSectionCard />
        <GroupSectionCard />
      </div>
      {/* highlights */}
      <div>Highlights</div>
    </div>
  );
}
