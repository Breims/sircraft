import Image from "next/image";
import Decoration from "./ui/Decoration";
import aboutus from "@public/assets/images/cover-about.webp";

const AboutUs = () => {
  return (
    <>
      <section
        id="aboutus"
        className="grid lg:grid-cols-2 xl:place-content-center xl:mb-20 px-8 xl:px-12 gap-8"
      >
        <div className="order-2">
          <Image
            className="rounded-xl shadow-xl w-full h-full object-cover"
            src={aboutus}
            alt="aboutus"
          />
        </div>

        <div className="grid place-items-start place-content-center order-1 lg:order-2">
          <p className="font-HelveticaBold text-xl md:text-3xl xl:text-5xl tracking-wide py-8">
            SOBRE NOSOTROS
          </p>

          <p className="text-gray-600 font-Titillium text-lg lg:text-xl">
            La idea surge en Cartagena en el año 2017 como VDArt twins, siendo
            un negocio familiar en donde solo se ofrecían peluches y muñecas, al
            pasar el tiempo se incorporaron más productos como artesanías en
            crochet, cuadros, figuras y muñecos personalizados, recordatorios,
            llaveros, figuras, alcancías, materos y productos de sublimación,
            por lo cual se vio la necesidad de hacer un rebranding de la marca,
            naciendo de esta forma SirCraft.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
