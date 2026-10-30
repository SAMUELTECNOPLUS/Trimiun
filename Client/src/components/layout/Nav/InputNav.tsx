import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group";


import { SearchIcon } from "lucide-react";


export const navInput = () => {
    return (
        <div className="w-full max-w-md flex-1">
            <InputGroup
                className="
      group
      rounded-lg
      border border-border
      bg-background

      transition-transform duration-500 ease-in-out

      focus-within:scale-[1.035]
      focus-within:ring-0
      focus-within:shadow-none

      motion-reduce:transform-none
    "
            >
                <InputGroupInput
                    placeholder="Buscar productos..."
                    className="
        font-tasa text-sm
        bg-transparent
        focus:outline-none
        focus:ring-0
      "
                />

                <InputGroupAddon
                    align="inline-end"
                    className="gap-2 pr-1.5"
                >
                    <SearchIcon
                        className="size-5 shrink-0 text-muted-foreground"
                    />

                    <div
                        className="
          max-w-0
          overflow-hidden
          opacity-0

          transition-[max-width,opacity]
          duration-300
          ease-in-out

          group-focus-within:max-w-24
          group-focus-within:opacity-100
        "
                    >
                        <InputGroupButton
                            type="button"
                            className="
            h-8
            min-w-max
            rounded-md
            px-3
            text-white

            transition-colors duration-200
            
          "
                        >
                            Buscar
                        </InputGroupButton>
                    </div>
                </InputGroupAddon>
            </InputGroup>
        </div >
    );
}