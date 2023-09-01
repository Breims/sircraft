import Image from "next/image";
import facebook from "@public/assets/logos/facebook.svg";
import instagram from "@public/assets/logos/instagram.svg";
import coverContactus from "@public/assets/images/cover-contactus.webp";

const ContactUs = () => {
  return (
    <section id="contactus" className="md:bg-slate-100 xl:h-screen flex flex-col justify-center px-8 xl:px-12">
      <div className="text-center p-10">
        <h1 className="font-HelveticaBold text-xl md:text-3xl xl:text-5xl">
          CONTACTANOS!
        </h1>
      </div>

      <div className="grid xl:grid-cols-2 place-items-center xl:place-items-stretch">

        <div className="md:px-24">
          <div className="xl:px-12">
            <div className="p-12">
              <p className="font-HelveticaBold text-xl">
                Correo Electrónico
              </p>
              <p className="font-Titillium text-slate-500">
                sircraft.desing@gmail.com
              </p>
            </div>

            <div className="p-12">
              <p className="font-HelveticaBold text-xl">Telefono</p>
              <p className="font-Titillium text-slate-500">
                +57 300 604 5248
              </p>
            </div>
          </div>

          <div className="mx-12 xl:mx-24 bg-purple-800 h-0.5"></div>

          <div className="p-12 font-raleway">
            <p className="text-center font-bold text-xl">
              Redes Sociales
            </p>
            <div className="py-6 xl:p-12 w-1/2 mx-auto grid grid-flow-col place-items-center">
              <a href="https://www.facebook.com/SirCraft.Desing">
                <Image className="w-8" src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/sircraft.desing/">
                <Image className="w-8" src={instagram} alt="instagram" />
              </a>
            </div>
          </div>

        </div>

        <div className="hidden xl:block m-auto">
          <Image className="h-[600px] object-cover rounded-xl shadow-xl" src={coverContactus} alt="cover" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;