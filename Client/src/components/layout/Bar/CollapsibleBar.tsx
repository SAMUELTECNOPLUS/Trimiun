
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

export const CollapsibleBar = () => {
    const [open, setOpen] = useState(false);
    const [Bar, SetBar] = useState(false);

    const on = `flex items-center justify-center w-[120px] h-[60px] hover:w-[120px] overflow-hidden whitespace-nowrap gap-2 cursor-pointer transition-all duration-300 bg-[#e27125]`;

    const blur = `flex items-center justify-center w-[160px] h-[60px] gap-2 cursor-pointer transition-all duration-300 bg-[#e27125]`;

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="relative flex"
        >
            <CollapsibleTrigger
                className={Bar ? blur : on}
                onFocus={() => SetBar(true)}
                onBlur={() => SetBar(false)}
            >
                <Menu size={22} />
                <span>Menú</span>
            </CollapsibleTrigger>

            <CollapsibleContent
                className="absolute top-full left-0 z-50 mt-2 w-60
        rounded-lg border border-white/10 bg-[#222222]
        p-3 shadow-xl"
            >
                <ul className="flex flex-col text-sm gap-2">
                    {[
                        "Supermercado",
                        "Belleza",
                        "Hogar",
                        "Tecnología",
                    ].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer rounded-md p-3 transition-colors hover:bg-[#2c2c2c] flex items-center justify-between"
                        >
                            {item}
                            <ChevronRight size={16} />
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    );
};
