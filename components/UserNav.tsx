// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useAuth } from "@/components/providers/AuthProvider";
// import { LogOut, User as UserIcon, Shield } from "lucide-react";
// import { useRouter } from "next/navigation";

// export function UserNav() {
//   const { user, logout } = useAuth();
//   const router = useRouter();

//   if (!user) return null;

//   const handleLogout = async () => {
//     await logout();
//     router.push("/"); // Redirect to Lobby after logout
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all">
//           <Avatar className="h-10 w-10">
//             <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
//             <AvatarFallback className="font-mono bg-primary text-primary-foreground font-bold">
//               {user.displayName?.slice(0, 2).toUpperCase() || "NV"}
//             </AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none font-mono text-primary">
//               {user.displayName}
//             </p>
//             <p className="text-xs leading-none text-muted-foreground font-mono truncate">
//               {user.email}
//             </p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem className="cursor-pointer font-mono text-xs">
//             <UserIcon className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//           </DropdownMenuItem>
//           <DropdownMenuItem className="cursor-pointer font-mono text-xs">
//             <Shield className="mr-2 h-4 w-4" />
//             <span>Privacy</span>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive font-mono text-xs font-bold">
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }


"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/components/providers/AuthProvider";
import { LogOut, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function UserNav() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) return null;

  const handleLogout = async () => {
    await logout();
    router.push("/"); // Go back to lobby after logout
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
            <AvatarFallback className="bg-primary text-primary-foreground font-mono font-bold">
              {user.displayName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none font-mono text-primary">{user.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground font-mono truncate">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive font-mono text-xs font-bold cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}