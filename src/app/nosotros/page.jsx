import Image from "next/image";
import aboutus from "@public/assets/images/cover-about.webp";

const AboutUs = () => {
  return (
    <>
      <section
        id="aboutus"
        className="grid lg:flex lg:justify-center lg:items-center px-8 xl:px-12 lg:gap-16 xl:h-screen"
      >
        <div className="lg:w-1/2 2xl:w-2/5 mb-4 lg:mb-0">
          <Image
            className="rounded-xl shadow-xl w-screen h-full object-cover"
            src={aboutus}
            alt="aboutus"
          />
        </div>

        <div className="lg:w-1/2 2xl:w-3/5">
          <h1 className="font-HelveticaBold text-xl md:text-3xl lg:text-[2rem] xl:text-[2.96rem] tracking-widest py-4 xl:py-8">
            SOBRE NOSOTROS
          </h1>

          <p className="text-gray-600 font-Titillium text-xs md:text-lg lg:text-xs xl:text-base 2xl:text-lg mb-2">
            En el año 2017, en Cartagena, nace la semilla de lo que más tarde se
            conocería como VDArt twins, un proyecto familiar que en sus inicios
            se concentraba en la venta de peluches y muñecas. Sin embargo, a
            medida que el tiempo avanzaba, este negocio experimentó un
            crecimiento considerable, incorporando gradualmente una variada gama
            de productos artísticos.
          </p>
          <p className="text-gray-600 font-Titillium text-xs md:text-lg lg:text-xs xl:text-base 2xl:text-lg mb-2">
            Lo que comenzó como una modesta oferta de peluches y muñecas pronto
            se expandió hacia horizontes más creativos y diversificados. La
            selección se amplió significativamente, incluyendo artesanías
            meticulosamente confeccionadas en crochet, llamativos cuadros,
            figuras y muñecos personalizados que transmitían un sentido único de
            estilo. La diversificación no se detuvo aquí, ya que también se
            sumaron elementos como recordatorios meticulosamente diseñados,
            encantadores llaveros, decorativas figuras temáticas, alcancías con
            un toque distintivo y una cuidadosa selección de productos de
            sublimación de alta calidad.
          </p>
          <p className="text-gray-600 font-Titillium text-xs md:text-lg lg:text-xs xl:text-base 2xl:text-lg">
            La evolución constante y el aumento de la oferta llevaron a una
            importante reflexión sobre la marca. Así nació SirCraft, una
            denominación que encarna el espíritu transformador que caracteriza a
            VDArt twins. SirCraft representa una entidad que va más allá de sus
            orígenes, capturando la amplia gama de habilidades artesanales y la
            pasión por la creación de objetos que no solo son visualmente
            cautivadores, sino que también despiertan emociones en quienes los
            reciben
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
