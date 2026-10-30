
import { Link } from "react-router-dom";
import { navInput as InputNav } from "./InputNav";
import LogoNav from "./LogoNav";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Heart,
  House,
  ShoppingCart,
  UserRound
} from "lucide-react";


export default function Nav() {


  const linkStyle =
    "flex items-center gap-2 rounded-lg px-4 py-3 font-tasa text-sm font-semibold transition-all duration-200 hover:bg-muted hover:text-primary";

  return (
    <header className="flex w-full items-center justify-between gap-8 border-b bg-background px-7 py-6">
      <LogoNav />
      <InputNav />


      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">

          <NavigationMenuItem>
            <Link to="/" className={linkStyle}>
              <House
                className="size-5"
                strokeWidth={1.8}
              />
              <span>Home</span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/login" className={linkStyle}>
              <UserRound
                className="size-5"
                strokeWidth={1.8}
              />
              <span>Cuenta</span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/favoritos" className={linkStyle}>
              <Heart
                className="size-5"
                strokeWidth={1.8}
              />
              <span>Favoritos</span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/carrito" className={linkStyle}>
              <ShoppingCart
                className="size-5"
                strokeWidth={1.8}
              />
              <span>Carrito</span>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

    </header>
  );
}


