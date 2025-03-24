"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { MenuSquare, User2Icon } from "lucide-react";
import axios from "axios";
import { Label } from "@/components/ui/label";

import Heading from "@/components/dashboard/heading";

const page = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const signedupUsers = await axios.get("/api/get-all-clerk-users");
    console.log(signedupUsers.data.users.data);
    const currentUsers = signedupUsers.data.users.data.filter((user: any) => {
      if (user.publicMetadata.role !== "admin") {
        return user;
      }
    });
    setUsers(currentUsers);
  };

  return (
    <div>
      <Heading
        title="Dashboard"
        description="All signed up Users"
        
      />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-8 overflow-scroll lg:overflow-hidden">
        {users.map((user: any, index: any) => (
          <div key={index}>
            <Card
              onClick={() => ""}
              key={index}
              className="p-3 border-black/20 flex items-start justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex flex-col w-full items-start gap-x-4">
                <div className="flex items-center gap-x-2 justify-between">
                  <div className={cn("p-2 w-ft rounded-md bg-[#01E0FF]")}>
                    <User2Icon className={cn("w-8 h-8 text-black")} />
                  </div>

                  <div className="font-normal text-sm">
                    <Label className="font-semibold">Email: </Label>
                    {user.emailAddresses[0].emailAddress}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
