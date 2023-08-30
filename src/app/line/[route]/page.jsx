import Image from "next/image";
import dataLines from "@/components/lines/Lines.js";
import NavbarLines from "@/components/shared/NavbarLines";

const Lines = ({ params }) => {
  const data = dataLines.find((routes) => routes.route === `line/${params.route}`);

  return (
    <section key={data.id}>
      <header>
        <NavbarLines />
        <section className="relative mt-20 md:mt-0">
          <figure className="grid place-content-center place-items-center lg:h-screen">
            <Image
              className="lg:h-screen w-screen object-cover"
              src={data.cover}
              width="1366"
              height="768"
              alt="coverMugs"
            />
          </figure>
          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <p className="h-full grid place-content-center place-items-center text-white font-HelveticaBold text-2xl md:text-5xl lg:text-[5rem] animate-fade-down animate-once animate-duration-500 animate-delay-300">
              {data.title}
            </p>
          </div>
        </section>
      </header>

      <main>
        <section className="bg-slate-100 px-8 lg:h-screen lg:px-12">
          <div className="grid grid-flow-col place-content-start place-items-center py-8 gap-6">
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
          </div>
          <div className="grid lg:grid-cols-2 place-items-center place-content-center py-6 gap-8">
            <div className="md:text-lg">
              <p className="pb-6">{data.paragraph1}</p>
              <p className="pb-6">{data.paragraph2}</p>
              <p className="pb-6">{data.paragraph3}</p>
            </div>

            <div>
              <Image
                className="rounded-xl md:h-[650px] w-screen object-cover"
                src={data.img1}
                width="600"
                height="600"
                alt="mugs1"
              />
            </div>
          </div>
        </section>

        <section className="px-8 lg:h-screen lg:px-12"> 
          <div className="grid grid-flow-col place-content-end place-items-center py-8 gap-6">
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
            <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
          </div>

          <div className="grid lg:grid-cols-2 place-items-center place-content-center py-6 gap-8">
            <div className="order-2">
              <Image
                className="rounded-xl md:h-[650px] w-screen object-cover"
                src={data.img2}
                width="400"
                height="400"
                alt="mugs2"
              />
            </div>
            <div className="md:text-lg lg:order-2">
              <p className="pb-6">{data.paragraph4}</p>
              <p className="pb-6">{data.paragraph5}</p>
              <p className="pb-6">{data.paragraph6}</p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Lines;
