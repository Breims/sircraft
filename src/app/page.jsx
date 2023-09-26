import HomePage from "@/components/HomePage";
import Productslines from "@/components/ProductsLines";
import ServiciosCards from "@/components/ServiciosCards";
import Decoration from "@/components/ui/Decoration";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "300", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "SirCraft Landing",
  description: "Información detallada SirCraft",
}

export default function Home() {
  return (
    <>
    <main className={poppins.className}>
      <HomePage />
      <section className="flex justify-end xl:hidden">
        <Decoration />
      </section>
      <ServiciosCards />
      <Productslines />
      <section className="flex justify-start md:hidden">
        <Decoration />
      </section>
    </main>
    </>
  );
}
