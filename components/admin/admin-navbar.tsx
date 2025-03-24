"use server";

import { UserButton } from "@clerk/nextjs";
import AdminMobileSidebar from "./admin-mobile-sidebar";

const AdminNavbar = async () => {
  return (
    <div className="flex bg-black items-center justify-between p-6">
      <div>
        <AdminMobileSidebar />
      </div>

      <div className="flex justify-end">
        <div className="flex gap-x-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
export default AdminNavbar;
