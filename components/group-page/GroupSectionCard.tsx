import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card"


export default function GroupSectionCard({section}) {

  //fetch sections associated
  return (
    <div>
      <Card>
        <CardHeader>

            {section.name}
<CardDescription>
          {section.description}
        </CardDescription>
        </CardHeader>
        
      </Card>
    </div>


  );
}
