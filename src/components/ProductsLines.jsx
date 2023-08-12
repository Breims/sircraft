import ProductsCards from "./ui/ProductsCards";


const Productslines = () => {
  return (
    <>
      <section id="line" className="mt-10">
        <div className="relative md:w-11/12 lg:w-4/5 p-16 m-auto text-center">
          <div className="w-4 h-8 md:w-7 md:h-14 lg:w-14 lg:h-28 absolute bottom-6 left-6 md:bottom-4 md:left-4 rounded-r-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>

          <p className="font-raleway font-semibold text-xl md:text-3xl lg:text-4xl tracking-wide">
            NUESTRAS LÍNEAS DE PRODUCCIÓN
          </p>

          <div className="w-4 h-8 md:w-7 md:h-14 lg:w-14 lg:h-28 absolute top-6 right-6 md:top-4 md:right-4 rounded-l-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        </div>
      </section>
      <section className="mx-6 md:mx-16 md:my-4 lg:my-10">
        <ProductsCards />
      </section>
    </>
  );
};

export default Productslines;