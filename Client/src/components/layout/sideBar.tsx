
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
    House,
    Laptop,
    ShoppingBasket,
    ShoppingCart,
    Sparkles,
    UserRound,
} from "lucide-react";

const categorias = [
    {
        title: "Supermercado",
        url: "/supermercado",
        icon: ShoppingBasket,
    },
    {
        title: "Belleza",
        url: "/belleza",
        icon: Sparkles,
    },
    {
        title: "Hogar",
        url: "/hogar",
        icon: House,
    },
    {
        title: "Tecnología",
        url: "/tecnologia",
        icon: Laptop,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <h2 className="text-xl font-bold">
                    Categorías
                </h2>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Explorar productos
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {categorias.map((categoria) => (
                                <SidebarMenuItem key={categoria.title}>
                                    <SidebarMenuButton >
                                        <a href={categoria.url}>
                                            <categoria.icon className="size-5" />
                                            <span>{categoria.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        Mi cuenta
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton >
                                    <a href="/carrito">
                                        <ShoppingCart />
                                        <span>Mi carrito</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton >
                                    <a href="/cuenta">
                                        <UserRound />
                                        <span>Mi cuenta</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <p className="text-xs text-muted-foreground">
                    © 2026 Trimiunm
                </p>
            </SidebarFooter>
        </Sidebar>
    );
}
