
import MarqueeImport from "react-fast-marquee";

// Resolver posible incompatibilidad de importación
const Marquee =
    (MarqueeImport as unknown as {
        default?: typeof MarqueeImport;
    }).default ?? MarqueeImport;

export default function MarqueeCa() {
    const images: string[] = [
        "/src/img/Apple.png",
        "/src/img/Asus.png",
        "/src/img/Dell.png",
        "/src/img/Hpm.png",
        "/src/img/Lenovo.png",
        "/src/img/Samsung.png",
        "/src/img/Sony.png",
    ];

    return (
        <section className="w-full overflow-hidden py-8">
            <Marquee
                speed={55}
                pauseOnHover={true}
                gradient={false}
                autoFill={true}
                direction="left"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="mx-4 flex h-44 w-56 items-center justify-center overflow-hidden rounded-xl bg-[#222222]"
                    >
                        <img
                            src={image}
                            alt={`Logo ${index + 1}`}
                            className="h-full w-full object-contain p-4"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
