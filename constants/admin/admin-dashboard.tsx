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
    label: "Real Estate Agent Trainer",
    icon: GoPerson,
    href: "/admin/real-estate-agent",
    color: "text-[#CC302F]",
  },
  {
    label: "HR Assistant",
    icon: GoPerson,
    href: "/admin/hr-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "Auditor Assistant",
    icon: GoPerson,
    href: "/admin/auditor-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "Educational Videos",
    icon: TbReportSearch,
    href: "/admin/educational-videos",
    color: "text-[#CC302F]",
  },
];