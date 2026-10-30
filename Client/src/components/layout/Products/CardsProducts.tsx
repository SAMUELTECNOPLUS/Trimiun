
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Check,
    HeartPlus,
    Search,
    ShoppingCartPlus,
} from "lucide-react";

export function ImageCard() {
    const [selected, setSelected] = useState<Record<string, boolean>>({});

    const actions = [
        { id: "favorite", icon: HeartPlus, label: "Favoritos" },
        { id: "search", icon: Search, label: "Ver producto" },
        { id: "cart", icon: ShoppingCartPlus, label: "Agregar al carrito" },
    ];

    const handleAction = (id: string) => {
        if (id === "search") return;

        const isAdding = !selected[id];

        const destination =
            id === "favorite" ? "favoritos" : "carrito";

        if (isAdding) {
            console.log(`Agregado a ${destination}:`, product);
        } else {
            console.log(`Eliminado de ${destination}:`, product);
        }

        setSelected((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };


    const product = {
        id: 1,
        name: "Producto tecnológico",
        price: 12000,
        originalPrice: 15300,
        image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800",
        quantity: 1,
    };


    return (
        <Card className="mt-[20px] group w-[300px] gap-0 overflow-hidden  p-0 transition-all duration-300 hover:shadow-lg">

            <div className="relative h-[230px] w-full overflow-hidden">

                <div className="absolute top-3 left-3 z-20 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#e57425] shadow-md">
                    <span className="text-sm font-bold text-white">
                        -22%
                    </span>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&auto=format&fit=crop&q=60"
                    alt="Producto"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute right-3 top-3 z-10 flex translate-y-2 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">

                    {actions.map(({ id, icon: Icon, label }) => {
                        const isSearch = id === "search";
                        const isSelected = !isSearch && !!selected[id];
                        const CurrentIcon = isSelected ? Check : Icon;

                        return (
                            <button
                                key={id}
                                type="button"
                                aria-label={label}
                                aria-pressed={isSearch ? undefined : isSelected}
                                title={isSelected ? "Agregado" : label}
                                onClick={() => handleAction(id)}
                                className={`
        flex size-9 items-center justify-center
        rounded-lg text-white backdrop-blur-sm
        transition-all duration-300
        hover:bg-[#e57425]
        active:scale-90
        ${isSelected
                                        ? "bg-[#e57425]"
                                        : "bg-black/60"
                                    }
      `}
                            >
                                <CurrentIcon
                                    className="size-[18px] transition-all duration-300"
                                    strokeWidth={isSelected ? 3 : 2}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            <CardHeader className="gap-1 px-4 pb-2 pt-4">
                <CardTitle className="text-base font-semibold tracking-tight">
                    Título del producto
                </CardTitle>

                <CardDescription className="line-clamp-2 text-xs leading-relaxed">
                    Una breve descripción sobre las características del producto.
                </CardDescription>
            </CardHeader>

            <CardContent className="px-4 pb-5 pt-2">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-500 line-through decoration-gray-500">
                        RD$15,300
                    </span>

                    <span className="text-xl font-bold tracking-tight text-[#e57425]">
                        RD$12,000
                    </span>
                </div>
            </CardContent>

        </Card>
    );
}
