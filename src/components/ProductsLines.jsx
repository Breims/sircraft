import ProductsCards from "./lines/LinesCards";


const Productslines = () => {
  return (
    <>
      <section id="lines" className="px-8 xl:px-12">
        <div className="relative py-16 text-center">
          <div className="w-4 h-8 md:w-7 md:h-14 xl:w-14 xl:h-28 absolute bottom-6 md:bottom-4 rounded-r-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>

          <p className="font-HelveticaBold text-xl md:text-3xl xl:text-5xl tracking-wide">
            NUESTRAS LÍNEAS DE PRODUCCIÓN
          </p>

          <div className="w-4 h-8 md:w-7 md:h-14 xl:w-14 xl:h-28 absolute top-6 right-0 md:top-4 rounded-l-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        </div>
      </section>
      <section className="px-8 xl:px-12 mt-10 xl:mb-20">
        <ProductsCards />
      </section>
    </>
  );
};

export default Productslines;