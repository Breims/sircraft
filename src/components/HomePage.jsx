import Carrusel from "./ui/Carrusel";

const animation =
  "animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-backwards";

const HomePage = () => {
  return (
    <header id="home" className={`relative mt-[55px] lg:m-auto lg:h-[70vh]`}>
      <figure className="w-full lg:h-[70vh]">
        <Carrusel />
      </figure>

      <section className="absolute top-0 w-full lg:h-[70vh] h-full px-8 xl:px-12 bg-slate-950 bg-opacity-70">
        <div className={`w-full h-full grid place-content-center place ${animation}`}>
          <div className="text-center grid place-content-center">
            <h1 className="text-[1.4rem] md:text-6xl lg:text-3xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800 tracking-wide xl:mb-2">
              CREANDO HISTORIAS
            </h1>
            <h1 className="text-[1.2rem] md:text-[3.15rem] lg:text-[1.6rem] xl:text-[3.15rem]  tracking-widest font-thin text-slate-50 xl:mb-2">
              ¡CON NUESTRAS MANOS!
            </h1>
          </div>

          <div className="mt-2 h-0.5 bg-slate-50"></div>

          <div className="flex items-center justify-center gap-4 md:gap-10 my-2 md:my-10">
            <div>
              <span className="font-bold text-slate-50 text-xs md:text-xl">
                Escribenos!
              </span>
              <span className="flex gap-1 items-center text-xs md:text-xl font-light text-slate-50">
                <svg
                  className="w-6 md:w-8"
                  width={44}
                  height={44}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                  <path d="M3 6l9 6l9 -6" />
                  <path d="M15 18h6" />
                  <path d="M18 15l3 3l-3 3" />
                </svg>
                sircraft.desing@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HomePage;
