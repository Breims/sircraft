import Carrusel from "./ui/Carrusel";

const animation =
  "animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-backwards";

const HomePage = () => {
  return (
    <header id="home" className={`relative mt-[55px] lg:m-auto`}>
      <figure className="w-full">
        <Carrusel />
      </figure>

      <section className="absolute top-0 w-full h-full px-8 xl:px-12 bg-slate-950 bg-opacity-70">
        <div className={`w-full h-full grid place-content-center ${animation}`}>
          <div className="text-center grid place-content-center">
            <p className="text-[1.4rem] md:text-[3.5rem] lg:text-[4rem] 2xl:text-[5.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800 tracking-wide">
              CREANDO HISTORIAS
            </p>
            <p className="text-[1.2rem] md:text-[2.9rem] lg:text-[3.4rem] 2xl:text-[4.6rem] tracking-widest font-thin text-slate-50">
              ¡CON NUESTRAS MANOS!
            </p>
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

          <figure className="m-auto hidden lg:block">
            <svg
              className="text-slate-50 m-auto hover:animate-bounce w-6 md:w-14"
              width={70}
              height={70}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M7 7l5 5l5 -5" />
              <path d="M7 13l5 5l5 -5" />
            </svg>
          </figure>
        </div>
      </section>
    </header>
  );
};

export default HomePage;
