import Image from "next/image";
import Decoration from "./ui/Decoration";
import aboutus from "@public/assets/images/cover-about.jpg";

const AboutUs = () => {
  return (
    <>
      <section
        id="aboutus"
        className="grid lg:grid-cols-2 lg:place-content-center mt-10 lg:mt-0"
      >
        <div className="order-2">
          <Image
            className="w-full h-full object-fill py-4 px-8 md:px-16 lg:p-16"
            src={aboutus}
            alt="aboutus"
          />
        </div>

        <div className="grid place-items-start place-content-center order-1 lg:order-2">
          <p className="font-HelveticaBold text-xl mx-8 md:text-3xl lg:text-4xl md:mx-10 md:mt-8 md:px-8 lg:mt-0 lg:mx-0 lg:p-8 tracking-wide">
            SOBRE NOSOTROS
          </p>

          <p className="mx-8 my-6 md:p-8 md:my-0 md:mx-10 lg:mx-0 lg:mb-20 text-gray-600 font-Titillium">
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
      <section className="flex justify-start ml-16">
        <Decoration />
      </section>
    </>
  );
};

export default AboutUs;
