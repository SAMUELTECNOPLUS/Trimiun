import { Link } from "react-router-dom";

const LogoNav = () => {
    return (

        <Link to="/" className="group block w-fit">
            <div className="relative h-[100px] w-[300px] shrink-0">

                <img
                    src="/src/img/Logotipo_minimalista_TRIMIUN_blanco-removebg-preview.png"
                    alt="Trimiun"
                    className="
        absolute inset-0
        h-full w-full object-contain
        opacity-100
        transition-all duration-500 ease-in-out
        group-hover:opacity-0
        group-hover:scale-95
        group-focus-visible:opacity-0
    "
                />

                <img
                    src="/src/img/Trimiun_naranja_e27125.png"
                    alt=""
                    aria-hidden="true"
                    className="
        absolute inset-0
        h-full w-full object-contain
        opacity-0
        transition-all duration-500 ease-in-out
        group-hover:opacity-100
        group-hover:scale-105
        group-focus-visible:opacity-100
      "
                />

            </div>
        </Link>
    );
}

export default LogoNav;