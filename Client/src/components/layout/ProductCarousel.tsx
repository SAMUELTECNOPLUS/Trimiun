
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import GridImages from "./gridImages";

import img1 from "@/img/componentes.jpg";
import img2 from "@/img/laptop.jpg";
import img3 from "@/img/Monitor2.jpg";

const imagenes = [img1, img2, img3];

export default function ProductCarousel() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

        {/* CARRUSEL IZQUIERDO */}
        <Carousel className="w-full min-w-0">
          <CarouselContent>
            {imagenes.map((imagen, index) => (
              <CarouselItem key={index}>
                <img
                  src={imagen}
                  alt={`Promoción ${index + 1}`}
                  className="w-full h-400px object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="w-full ">
          <GridImages />
        </div>

      </div>
    </section>
  );
}
