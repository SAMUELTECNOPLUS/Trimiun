
export default function GridImages() {
    return (
        <div className="grid grid-cols-2 gap-3 w-full h-[420px]">

            {/* COLUMNA 1 */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 min-h-0">

                {/* IMAGEN SUPERIOR HORIZONTAL */}
                <img
                    src="/src/img/Monitores.jpg"
                    alt="Promoción 1"
                    className="col-span-2 w-full h-full min-h-0 object-cover rounded-xl"
                />

                {/* DOS IMÁGENES INFERIORES */}
                <img
                    src="/src/img/Mandos Joy-Con en contraste teal y naranja.png"
                    alt="Promoción 2"
                    className="w-full h-full min-h-0 object-cover rounded-xl"
                />

                <img
                    src="/src/img/MicrofonoV.png"
                    alt="Promoción 3"
                    className="w-full h-full min-h-0 object-cover rounded-xl"
                />

            </div>

            <img
                src="/src/img/Teclado.jpg"
                alt="Promoción 4"
                className="w-full h-full min-h-0 object-cover rounded-xl"
            />

        </div>
    );
}
