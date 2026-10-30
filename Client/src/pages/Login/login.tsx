import FieldRegister from "./fieldRegister.tsx";

import FondoLiquid from "@/img/FondoLiquid.png";

export default function Login() {
    return (
        <main className="grid  grid-cols-1 lg:grid-cols-2">

            <div className="hidden lg:block">
                <img
                    src={FondoLiquid}
                    alt=""
                    className="h-[1100px] w-[800px] object-cover"
                />
            </div>

            <div className="flex items-center justify-center px-3 py-2">
                <div className="w-full max-w-sm mb-90">
                    <FieldRegister />
                </div>
            </div>

        </main>
    );
}