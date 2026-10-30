import { Button, buttonVariants } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


// ==============================
// COUNTRIES
// ==============================

const countries = [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "ca" },
    { label: "Dominican Republic", value: "do" },
    { label: "Argentina", value: "ar" },
    { label: "Bolivia", value: "bo" },
    { label: "Brazil", value: "br" },
    { label: "Chile", value: "cl" },
    { label: "Colombia", value: "co" },
    { label: "Costa Rica", value: "cr" },
    { label: "Cuba", value: "cu" },
    { label: "Ecuador", value: "ec" },
    { label: "El Salvador", value: "sv" },
    { label: "Guatemala", value: "gt" },
    { label: "Honduras", value: "hn" },
    { label: "Mexico", value: "mx" },
    { label: "Nicaragua", value: "ni" },
    { label: "Panama", value: "pa" },
    { label: "Paraguay", value: "py" },
    { label: "Peru", value: "pe" },
    { label: "Puerto Rico", value: "pr" },
    { label: "Uruguay", value: "uy" },
    { label: "Venezuela", value: "ve" },
];

const inputAnimation = `
  w-full h-11
  rounded-xl
  border-2 border-border
  bg-background/60
  px-4
  outline-none

  transition-all duration-300 ease-out

  hover:border-orange-400/50
  hover:bg-muted/40

  focus:-translate-y-0.5
  focus:border-orange-500
  focus:bg-background
  focus:shadow-lg
  focus:shadow-orange-500/15

  focus-visible:border-orange-500
  focus-visible:ring-4
  focus-visible:ring-orange-500/20

  motion-reduce:transform-none
  motion-reduce:transition-none
`;

const labelAnimation = `
  transition-all duration-300 ease-out
  group-focus-within:text-orange-500
  group-focus-within:translate-x-1
`;

const fieldAnimation = `
  group
  trimiun-field-enter
  transition-all duration-300
`;

const buttonAnimation = `
  flex-1 h-11 rounded-xl
`;

// ==============================
// COMPONENT
// ==============================

export default function FieldRegister() {
    return (
        <>
            <style>
                {`
          @keyframes trimiun-fade-up {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes trimiun-logo-appear {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.85);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes trimiun-slide-left {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .trimiun-field-enter {
            animation: trimiun-fade-up 600ms ease-out both;
          }

          .trimiun-logo-enter {
            animation: trimiun-logo-appear 850ms ease-out both;
          }

          .trimiun-home-enter {
            animation: trimiun-slide-left 500ms ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .trimiun-field-enter,
            .trimiun-logo-enter,
            .trimiun-home-enter {
              animation: none !important;
            }
          }
        `}
            </style>

            <form
                className="w-full max-w-sm mt-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <Link
                    to="/"
                    className={`${buttonVariants({ variant: "default" })}`}
                >
                    <MoveLeft />
                    <span>Home</span>
                </Link>

                <div className="flex items-center justify-center my-2">

                </div>

                {/* Se agregó space-y-3 para acercar los campos verticalmente */}
                <FieldGroup className="space-y-0">
                    <Field
                        className={fieldAnimation}
                        style={{ animationDelay: "100ms" }}
                    >
                        <FieldLabel
                            htmlFor="form-name"
                            className={labelAnimation}
                        >
                            Name
                        </FieldLabel>
                        <Input
                            id="form-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Evil Rabbit"
                            className={inputAnimation}
                            required
                        />
                    </Field>

                    <Field
                        className={fieldAnimation}
                        style={{ animationDelay: "200ms" }}
                    >
                        <FieldLabel
                            htmlFor="form-email"
                            className={labelAnimation}
                        >
                            Email
                        </FieldLabel>
                        <Input
                            id="form-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="john@example.com"
                            className={inputAnimation}
                            required
                        />
                        <FieldDescription
                            className="
                                transition-all duration-300
                                group-focus-within:text-orange-500
                                group-focus-within:translate-x-1
                            "
                        >
                            We'll never share your email with anyone.
                        </FieldDescription>
                    </Field>

                    <div className="grid grid-cols-2 gap-3">
                        <Field
                            className={fieldAnimation}
                            style={{ animationDelay: "300ms" }}
                        >
                            <FieldLabel
                                htmlFor="form-phone"
                                className={labelAnimation}
                            >
                                Phone
                            </FieldLabel>
                            <Input
                                id="form-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="+1 (555) 123-4567"
                                className={inputAnimation}
                            />
                        </Field>

                        <Field
                            className={fieldAnimation}
                            style={{ animationDelay: "400ms" }}
                        >
                            <FieldLabel
                                htmlFor="form-country"
                                className={labelAnimation}
                            >
                                Country
                            </FieldLabel>
                            <Select name="country" defaultValue="do">
                                <SelectTrigger
                                    id="form-country"
                                    className={`
                                        ${inputAnimation}
                                        cursor-pointer
                                        data-[state=open]:-translate-y-0.5
                                        data-[state=open]:border-orange-500
                                        data-[state=open]:bg-background
                                        data-[state=open]:ring-4
                                        data-[state=open]:ring-orange-500/20
                                        data-[state=open]:shadow-lg
                                        data-[state=open]:shadow-orange-500/15
                                        [&_svg]:transition-transform
                                        [&_svg]:duration-300
                                        data-[state=open]:[&_svg]:rotate-180
                                    `}
                                >
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent
                                    className="
                                        rounded-xl
                                        border-border
                                        bg-popover
                                        shadow-2xl
                                        data-[state=open]:animate-in
                                        data-[state=open]:fade-in-0
                                        data-[state=open]:zoom-in-95
                                        data-[state=closed]:animate-out
                                        data-[state=closed]:fade-out-0
                                        data-[state=closed]:zoom-out-95
                                    "
                                >
                                    <SelectGroup>
                                        {countries.map((country) => (
                                            <SelectItem
                                                key={country.value}
                                                value={country.value}
                                                className="
                                                    cursor-pointer
                                                    rounded-lg
                                                    transition-all duration-200
                                                    data-[highlighted]:bg-orange-500/10
                                                    data-[highlighted]:text-orange-500
                                                    data-[state=checked]:font-semibold
                                                "
                                            >
                                                {country.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>

                    <Field
                        className={fieldAnimation}
                        style={{ animationDelay: "500ms" }}
                    >
                        <FieldLabel
                            htmlFor="form-address"
                            className={labelAnimation}
                        >
                            Address
                        </FieldLabel>
                        <Input
                            id="form-address"
                            name="address"
                            type="text"
                            autoComplete="street-address"
                            placeholder="123 Main St"
                            className={inputAnimation}
                        />
                    </Field>

                    <Field
                        orientation="horizontal"
                        className="trimiun-field-enter pt-1"
                        style={{ animationDelay: "600ms" }}
                    >
                        <Button
                            type="reset"
                            variant="outline"
                            className={`
                                ${buttonAnimation}
                                border-2
                                hover:border-orange-400/50
                                hover:bg-orange-500/10
                                hover:text-orange-500
                                hover:shadow-orange-500/10
                            `}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className={`
                                ${buttonAnimation}
                                relative overflow-hidden
                                hover:bg-orange-500
                                hover:text-white
                                hover:shadow-orange-500/30
                            `}
                        >
                            <span className="relative z-10">Submit</span>
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </>
    );
}