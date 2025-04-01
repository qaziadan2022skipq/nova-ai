import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";

export const sidebarRoutes = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard",
    color: "text-[#CC302F]",
  },
  {
    label: "Real Estate Agent Trainer",
    icon: GoPerson,
    href: "/real-estate-agent",
    color: "text-[#CC302F]",
  },
  {
    label: "HR Assistant",
    icon: GoPerson,
    href: "/hr-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "Auditor Assistant",
    icon: GoPerson,
    href: "/auditor-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "Educational Videos",
    icon: TbReportSearch,
    href: "/educational-videos",
    color: "text-[#CC302F]",
  },
];


export const educationVideosList = [
  {
    videLink: "https://www.youtube.com/embed/ZAZmL4Yq3RI?si=qm_qdtpLccA4l61l",
    title: "Vibe Realty Closing the Deal Module",
  },
  
];