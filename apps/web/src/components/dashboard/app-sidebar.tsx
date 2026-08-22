import * as React from "react"

import { NavDocuments } from "@/components/dashboard/nav-documents"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { IconDashboard, IconListDetails, IconChartBar, IconFolder, IconUsers, IconCamera, IconFileDescription, IconFileAi, IconSettings, IconHelp, IconSearch, IconDatabase, IconReport, IconFileWord } from "@tabler/icons-react"
import logo from "@/assets/icons/logo.png"
import sidebarBg from "@/assets/ecommerce-phone-happy-black-woman-with-credit-card-online-shopping-digital-payment-app-home-smile-banking-excited-african-girl-checks-cash-budget-money-growth-savings-online_590464-111903.jpg"

const data = {
  user: {
    name: "shadcn",
    email: "Free Plan",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: (
        <IconDashboard
        />
      ),
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: (
        <IconListDetails
        />
      ),
    },
    {
      title: "Analytics",
      url: "#",
      icon: (
        <IconChartBar
        />
      ),
    },
    {
      title: "Projects",
      url: "#",
      icon: (
        <IconFolder
        />
      ),
    },
    {
      title: "Team",
      url: "#",
      icon: (
        <IconUsers
        />
      ),
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: (
        <IconCamera
        />
      ),
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: (
        <IconFileDescription
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: (
        <IconFileAi
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <IconSettings
        />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <IconHelp
        />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <IconSearch
        />
      ),
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: (
        <IconDatabase
        />
      ),
    },
    {
      name: "Reports",
      url: "#",
      icon: (
        <IconReport
        />
      ),
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: (
        <IconFileWord
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      style={{
        "--sidebar-bg": `url(${sidebarBg})`,
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.75) 100%), var(--sidebar-bg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } as React.CSSProperties}
      className="dark:!bg-none dark:bg-sidebar [&>div]:bg-transparent dark:[background-image:linear-gradient(to_bottom,rgba(15,15,20,0.92)_0%,rgba(15,15,20,0.85)_40%,rgba(15,15,20,0.75)_100%),var(--sidebar-bg)] dark:[background-size:cover] dark:[background-position:center] dark:[background-repeat:no-repeat]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <img src={logo} alt="XerinPay" className="size-7" />
              <span className="text-base font-semibold">XerinPay</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
