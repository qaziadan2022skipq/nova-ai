"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import AdminSidebar from "./admin-sidebar";

const AdminMobileSidebar = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white bg-black"
        >
          <Menu className="text-[#ffffff] font-extrabold" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <AdminSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default AdminMobileSidebar;
