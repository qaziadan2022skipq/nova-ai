import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";

export const adminSidebarRoutes = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/admin/dashboard",
    color: "text-[#CC302F]",
  },
  {
    label: "Nova AI Assistant",
    icon: GoPerson,
    href: "/admin/hr-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "Educational Videos",
    icon: TbReportSearch,
    href: "/admin/educational-videos",
    color: "text-[#CC302F]",
  },
];