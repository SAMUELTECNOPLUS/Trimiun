
import { useState } from "react";
import { ImageCard } from "./CardsProducts";

export const ListProducts = () => {
    const [active, setActive] = useState("NUEVOS");

    const categories = [
        "NUEVOS",
        "DESTACADOS",
        "MÁS VENDIDOS",
    ];

    return (
        <main className="w-[500px] ml-[50px] h-[800px] mt-[80px]">
            <div className="flex items-center w-[1250px]  gap-6 border-b border-gray-200">

                <h1 className="text-xl font-bold text-[#fff] border-b-2 border-[#e27125] pb-3">
                    PRODUCTOS
                </h1>

                <ul className="flex items-center gap-8  ">
                    {categories.map((category) => (
                        <li
                            key={category}
                            onClick={() => setActive(category)}
                            className={`
                relative pb-3 text-sm font-semibold 
                cursor-pointer whitespace-nowrap
                transition-colors duration-300
                ${active === category
                                    ? "text-[#e27125]"
                                    : "text-[#fff]  hover:text-[#e27125]"
                                }
              `}
                        >
                            {category}

                            <span
                                className={`
                  absolute bottom-2 left-0 h-[2px]
                  bg-[#e27125]
                  transition-all duration-300 ease-in-out
                  ${active === category
                                        ? "w-full"
                                        : "w-0"
                                    }
                `}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <ImageCard />
        </main>
    );
};
