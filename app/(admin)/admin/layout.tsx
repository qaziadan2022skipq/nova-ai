import AdminNavbar from "@/components/admin/admin-navbar";
import AdminSidebar from "@/components/admin/admin-sidebar";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { Poppins } from "next/font/google";
import { redirect } from "next/navigation";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  if ((await auth()).sessionClaims?.metadata.role !== "admin") {
    redirect(`/dashboard`);
  }
  return (
    <div className={cn("h-full relative bg-white", poppins.className)}>
      <div className="hidden h-full md:flex md:w-[17rem] md:flex-col md:fixed md:inset-y-0 rounded-br-lg rounded-tr-lg">
        <AdminSidebar />
      </div>
      <main className={cn("md:pl-[17rem]")}>
        <AdminNavbar />

        <div className="max-h-screen rounded-tl-lg bg-white px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
