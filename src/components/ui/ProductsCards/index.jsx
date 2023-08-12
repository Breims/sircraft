import Link from "next/link.js";
import Image from "next/image";
import { products } from "./productsDetails.js";


const ProductsCards = () => {

  return (
    <>
      <div className="grid grid-cols-9 overflow-x-auto md:grid-cols-2 lg:grid-cols-4 gap-[22em] md:gap-6 lg:gap-10">
      
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.ruteLine}
            className="grid grid-cols-2 md:grid-cols-1 place-items-center bg-white rounded-xl shadow w-80 md:w-full hover:bg-gray-100"
          >
            <Image
              className="object-fill p-2 md:p-6 rounded-full lg:w-72 lg:h-72"
              width={200}
              height={200}
              src={product.image}
              alt="lineas"
            />
            <div className="grid md:h-48 lg:h-52 px-1 my-2 md:my-0 md:p-6">
              <p className="md:mb-2 md:text-2xl font-HelveticaBold text-black ">
                {product.linea}
              </p>
              <p className="my-2 text-xs md:text-base font-normal font-Titillium text-gray-600 mr-2">
                {product.descripcion}
              </p>
            </div>
          </Link>
        ))}
        <div className="hidden md:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="hidden lg:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="hidden lg:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
      </div>
    </>
  );
};

export default ProductsCards;