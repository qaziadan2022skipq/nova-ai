"use client";

import { adminSidebarRoutes } from "@/constants/admin/admin-dashboard";
import { sidebarRoutes } from "@/constants/dashboard/dashboard";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const monserrat = Poppins({ weight: "600", subsets: ["latin"] });

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-6 py-3 flex flex-col h-full bg-black text-[#000000] drop-shadow-xl">
      <div className="flex flex-col gap-y-2 py-1">
        <Link
          href="/dashboard"
          className="flex flex-col justify-center items-center mt-2 mb-2 text-xl font-bold"
        >
          <Image
            src={"/nav-logo.jpg"}
            width={120}
            height={120}
            alt="mainlogo"
            // className="rounded-full"
          />
          <h1 className="text-white">Admin Panel</h1>
        </Link>
        <div id="scroll" className="flex flex-col mt-8 gap-y-2 overflow-y-auto overflow-hidden max-h-[71vh]">
          {adminSidebarRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex text-sm group p-2 w-full justify-start font-medium cursor-pointer hover:font-semibold transition",
                pathname === route.href
                  ? "text-[#01E0FF] border-l-4 border-[#01E0FF] "
                  : "text-white"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === route.href
                      ? "text-[#01E0FF] "
                      : "text-white"
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdminSidebar;
