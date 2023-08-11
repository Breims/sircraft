import Image from "next/image";
import logo from "@public/assets/logos/SirCraft-2.png";
import enviar from "@public/assets/icons/enviar-gray.svg";

const Footer = () => {
    return ( 
        <footer className="grid">
        <section className="grid grid-cols-2 lg:grid-cols-3 lg:m-16 lg:divide-x lg:divide-purple-100 m-8">
          <div className="lg:m-8 grid lg:block place-items-center mr-8 md:mr-0">
            <figure className="grid place-items-center">
              <Image
                className="w-3/4 md:w-1/2 object-cover p-1"
                src={logo}
                alt="sircraft"
              />
              <div>
                <p className="font-HelveticaBold md:text-xl text-xs">
                  CREANDO HISTORIAS
                </p>
                <div className="bg-purple-200 h-0.5" />
                <p className="text-center font-HelveticaRegular tracking-wide md:text-xl text-gray-500 text-xs">
                  Con Nuestras Manos
                </p>
              </div>
            </figure>
          </div>

          <div className="md:p-8">
            <p className="font-raleway font-HelveticaBold md:text-2xl md:p-2 py-2">
              Servicios
            </p>
            <ul className="md:py-6 py-1 font-Titillium">
              <li className="py-2 md:p-2 text-gray-500 md:text-base text-xs">
                Retratos e Interpretaciones
              </li>
              <li className="py-2 md:p-2 text-gray-500 md:text-base text-xs">
                Creaciones Personalizadas
              </li>
              <li className="py-2 md:p-2 text-gray-500 md:text-base text-xs">
                Publicidad
              </li>
              <li className="py-2 md:p-2 text-gray-500 md:text-base text-xs">
                Capacitaciones
              </li>
              <li className="py-2 md:p-2 text-gray-500 md:text-base text-xs">
                Sublimación
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 md:p-8">
            <div className="lg:hidden h-0.5 bg-purple-100 my-4" />
            <p className="font-HelveticaBold md:text-2xl p-2">
              Boletín Informativo
            </p>
            <div className="py-6">
              <p className="font-Titillium p-2 text-gray-500 md:text-base text-sm">
                Inscríbete a nuestras noticias semanales, deja tu correo
                electrónico
              </p>
              <div className="relative p-2">
                <input
                  className="p-3 font-Titillium border border-gray-400 rounded-lg w-full focus:border-purple-500 focus:outline-0"
                  placeholder="ejemplo@mail.com"
                  type="text"
                />
                <button>
                  <Image
                    className="absolute top-5 right-5 w-6"
                    src={enviar}
                    alt="enviar"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="h-0.5 bg-purple-100 md:mx-16" />
        <section className="grid grid-flow-col place-content-between mx-8 md:mx-16 py-10 font-Titillium">
          <span className="font-lato font-light text-xs md:text-sm text-gray-500">
            Powered By{" "}
            <a className="font-bold" href="https://github.com/Breims">
              Breims
            </a>{" "}
            ⓒ2023
          </span>
          <span className="font-lato font-light text-xs md:text-sm text-gray-500">
            built with great affection❤️
          </span>
        </section>
      </footer> 
     );
}
 
export default Footer;