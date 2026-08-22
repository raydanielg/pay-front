import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { IconSearch, IconBell } from "@tabler/icons-react"
import { ModeToggle } from "@/components/theme/mode-toggle"

const notifications = [
  { id: 1, title: "New payment received", desc: "TSh 45,000 from John Doe", time: "2m ago", unread: true },
  { id: 2, title: "Withdrawal approved", desc: "TSh 120,000 to CRDB Bank", time: "1h ago", unread: true },
  { id: 3, title: "New business registered", desc: "Mama Casanova Ltd joined", time: "3h ago", unread: false },
]

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-2 px-4 lg:gap-3 lg:px-6">
        <SidebarTrigger className="-ms-1" />
        <Separator
          orientation="vertical"
          className="mx-1 h-4 data-vertical:self-auto"
        />
        <h1 className="text-base font-medium hidden sm:block">Dashboard</h1>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="h-9 w-48 pl-9 lg:w-64"
            />
          </div>

          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Notifications" />
              }
            >
              <IconBell className="size-5" />
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 p-0"
              sideOffset={8}
            >
              <DropdownMenuLabel className="flex items-center justify-between px-4 py-3">
                <span>Notifications</span>
                <span className="text-xs text-muted-foreground">3 new</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((n) => (
                <DropdownMenuItem
                  key={n.id}
                  className="flex flex-col items-start gap-1 px-4 py-3"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium">{n.title}</span>
                      <span className="text-xs text-muted-foreground">{n.desc}</span>
                      <span className="text-xs text-muted-foreground/70">{n.time}</span>
                    </div>
                    {n.unread && (
                      <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center py-2.5 text-sm font-medium text-primary">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
