import Image from "next/image";
import logo from "@public/assets/logos/sircraft.webp";
import Link from "next/link";
import Whatsapp from "../ui/Whatsapp";

const Footer = () => {
  return (
    <footer id="footer" className="grid bg-slate-50">
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:m-12 lg:divide-x lg:divide-purple-100 m-8">
        <div className="lg:m-8 grid lg:block place-items-center mr-8 md:mr-0">
          <figure className="grid place-items-center">
            <Image
              className="w-3/4 md:w-1/2 object-cover p-1"
              src={logo}
              alt="sircraft"
            />
            <div className=" ">
              <p className="text-center text-slate-800 md:text-xl md:tracking-wide text-xs font-bold">
                CREANDO HISTORIAS
              </p>
              <div className="bg-purple-200 h-0.5" />
              <p className="text-center md:tracking-wide md:text-xl text-slate-500 text-xs">
                Con Nuestras Manos
              </p>
            </div>
          </figure>
        </div>

        <div className="md:p-8">
          <p className="font-bold text-slate-800 md:text-xl md:p-2 py-2">
            Servicios
          </p>
          <ul className="md:py-4 py-1 font-Titillium">
            <li className="py-2 md:p-2 text-slate-500 md:text-base text-xs">
              Creaciones Personalizadas
            </li>
            <li className="py-2 md:p-2 text-slate-500 md:text-base text-xs">
              Publicidad
            </li>
            <li className="py-2 md:p-2 text-slate-500 md:text-base text-xs">
              Capacitaciones
            </li>
            <li className="py-2 md:p-2 text-slate-500 md:text-base text-xs">
              Sublimación
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-auto">
          <div className="mx-12 bg-purple-200 h-0.5 lg:hidden"></div>

          <div className="text-slate-800">
            <div className="px-12 py-6">
              <p className="md:text-xl font-bold">Correo Electrónico</p>
              <p className="text-xs md:text-base text-slate-500">
                sircraft.desing@gmail.com
              </p>
            </div>

            <div className="px-12 py-6">
              <p className="md:text-xl font-bold">Telefono</p>
              <p className="text-xs md:text-base text-slate-500">+57 300 604 5248</p>
            </div>
          </div>

          <div className="mx-12 bg-purple-200 h-0.5"></div>

          <div className="p-1">
            <p className="text-slate-800 text-center font-bold md:text-xl">
              Redes Sociales
            </p>
            <div className="py-4 w-1/2 mx-auto grid grid-flow-col place-items-center">
              <Whatsapp
                img={
                  <svg
                    className="text-slate-500 w-8"
                    width="50"
                    height="50"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654c0 .977.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                }
              />
              <Link href="https://www.facebook.com/SirCraft.Desing">
                <svg
                  className="w-8 text-slate-500"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  fill="currentColor"
                >
                  <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/sircraft.desing/">
                <svg
                  className="w-8 text-slate-500"
                  width="50"
                  height="50"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-purple-100 md:mx-12" />
      <section className="grid grid-flow-col place-content-between mx-8 md:mx-12 py-10">
        <span className="font-light text-xs md:text-sm text-slate-500">
          Powered By{" "}
          <Link href="https://github.com/Breims">
            <span className="font-bold">Breims</span>
          </Link>{" "}
          ⓒ2023
        </span>
        <span className="font-light text-xs md:text-sm text-slate-500">
          built with great affection❤️
        </span>
      </section>
    </footer>
  );
};

export default Footer;
