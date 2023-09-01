import Link from "next/link";
import Image from "next/image";
import dataLines from "./Lines.js"

const LinesCards = () => {

  return (
    <>
      <div className="grid grid-flow-col md:grid-flow-row overflow-x-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10">
      
        {dataLines.map((data) => (
          <Link
            key={data.id}
            href={`${data.route}`}
            className="grid grid-cols-2 md:grid-cols-1 place-items-center bg-white rounded-xl shadow w-80 md:w-full hover:bg-gray-100"
          >
            <figure className="w-full flex items-center justify-center">
              <Image
              className="object-cover p-2 md:p-4 rounded-full w-40 h-40 xl:w-72 md:h-64 md:w-64 2xl:h-72"
              width={200}
              height={200}
              src={data.image}
              alt="lineas"
            />
            </figure>
            
            <div className="grid md:h-48 lg:h-52 px-1 my-2 md:my-0 md:p-6">
              <p className="md:mb-2 md:text-2xl font-HelveticaBold text-black ">
                {data.line}
              </p>
              <p className="my-2 text-xs md:text-base font-normal font-Titillium text-gray-600 mr-2">
                {data.description}
              </p>
            </div>
          </Link>
        ))}
        <div className="hidden xl:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="hidden xl:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="hidden xl:block w-28 h-28 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
      </div>
    </>
  );
};

export default LinesCards;