import Image from "next/image";
import Link from "next/link";
import { allServicios } from "@/app/servicios/servicios";

const ServiciosCards = () => {
  return (
    <div className="px-8 lg:px-12 grid">
      <h1 className="hidden lg:block text-slate-800 text-lg md:text-2xl xl:text-4xl text-center uppercase font-bold tracking-wide p-8">
        Servicios
      </h1>

      <section className="grid grid-flow-col lg:place-content-center py-4 gap-6 overflow-x-auto">
        {allServicios.map((servicio) => (
          <article
          key={servicio.id}
            className="w-72 bg-slate-50 border border-slate-200 rounded-lg shadow p-2"
          >
            <figure className="flex items-center gap-3 py-2">
              <Image
                src={servicio.icon}
                width={40}
                height={40}
              />
              <Link href="/servicios">
                <h1 className="mb-2 font-semibold tracking-tight text-slate-900">
                  {servicio.title}
                </h1>
              </Link>
            </figure>
            <Link
              href="/servicios"
              className="inline-flex items-center text-purple-600 hover:underline"
            >
              {servicio.button}
              <svg
                className="w-3 h-3 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ServiciosCards;
