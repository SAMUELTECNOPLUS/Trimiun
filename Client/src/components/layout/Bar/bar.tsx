
import { CollapsibleBar } from "./CollapsibleBar";


export default function Bar() {

    return (
        <div className="flex flex-row items-stretch gap-8 ml-7 mt-3 h-[60px] bg-[#222222] pr-[10px]">

            <CollapsibleBar />

            <ul className="flex flex-row items-center gap-6 py-[10px]">

                <li className="relative cursor-pointer inline-block py-3 px-4 transition-all duration-100 hover:bg-[#2c2c2c] group">
                    Supermercado
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                </li>

                <li className="relative cursor-pointer inline-block py-3 px-4 transition-all duration-100 hover:bg-[#2c2c2c] group">
                    Belleza
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                </li>

                <li className="relative cursor-pointer inline-block py-3 px-4 transition-all duration-100 hover:bg-[#2c2c2c] group">
                    Hogar
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                </li>

                <li className="relative cursor-pointer inline-block py-3 px-4 transition-all duration-100 hover:bg-[#2c2c2c] group">
                    Tecnología
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-white transition-all duration-100 group-hover:h-full"></span>
                </li>

            </ul>
        </div>
    );
}
