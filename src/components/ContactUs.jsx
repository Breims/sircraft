import Image from "next/image";
import facebook from "@public/assets/logos/facebook.svg";
import instagram from "@public/assets/logos/instagram.svg";
import coverContactus from "@public/assets/images/cover-contactus.jpg";

const ContactUs = () => {
  return (
    <section id="contactus" className="md:bg-slate-100 py-12 md:p-10">
      <div className="text-center">
        <p className="p-6 md:p-10 font-HelveticaBold text-xl md:text-3xl lg:text-4xl">
          CONTACTANOS!
        </p>
      </div>

      <div className="bg-white grid lg:grid-cols-3 md:p-16">
        <div className="mx-16 my-8 lg:m-16">
          <div className="">
            <div>
              <p className="p-2 font-HelveticaBold text-xl">
                Correo Electrónico
              </p>
              <p className="font-Titillium px-2 py-1 text-slate-500">
                sircraft.desing@gmail.com
              </p>
            </div>

            <div className="lg:my-10">
              <p className="p-2 font-HelveticaBold text-xl">Telefono</p>
              <p className="font-Titillium px-2 py-1 text-slate-500">
                +57 300 604 5248
              </p>
            </div>
          </div>

          <div className="mx-2 bg-purple-800 h-0.5"></div>

          <div className="font-raleway">
            <p className="my-4 lg:my-0 text-center p-2 font-bold text-xl">
              Redes Sociales
            </p>
            <div className="w-1/2 mx-auto grid grid-flow-col place-items-center my-4 lg:my-6">
              <a href="https://www.facebook.com/SirCraft.Desing">
                <Image className="w-8" src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/sircraft.desing/">
                <Image className="w-8" src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2 m-16">
          <Image className="h-screen-nav m-auto" src={coverContactus} alt="cover" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;