"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import NewGroupForm from "@/components/NewGroupForm";

export default function Page() {
  const [textFields, setTextFields] = useState([]);

  const addTextField = () => {
    // Add a new text field to the array
    setTextFields([...textFields, ""]);
  };

  return (
    <div>
      {/* <NewGroupForm user={session!.user} /> */}
      {/* <NewGroupForm user={session!.user} /> */}
      <div className="rounded-tl-lg sticky top-0 w-full bg-white shadow py-2 px-6 text-xl">
        New Group Application
      </div>
      <div className="flex flex-col items-start pt-4 space-y-2 px-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Group Name</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Group Description</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>

        {textFields.map((_, index) => (
          <div key={index}>
            <Input
              className="mt-2 p-2 border rounded"
              placeholder={`Board Member #${index + 1}`}
            />
            <Input
              className="mt-2 p-2 border rounded"
              placeholder={`Board Member #${index + 1}`}
            />
          </div>
        ))}
        <Button variant="outline" className="h-9" onClick={addTextField}>
          <Icons.plus className="mr-2" />
          Add Board Member
        </Button>
      </div>
    </div>
  );
}
