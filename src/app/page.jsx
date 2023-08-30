import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HomePage from "@/components/HomePage";
import Productslines from "@/components/ProductsLines";
import NavbarLanding from "@/components/shared/NavbarLanding";
import Decoration from "@/components/ui/Decoration";

export default function Home() {
  return (
    <>
      <NavbarLanding />
      <HomePage />
      <section className="flex justify-end">
        <Decoration />
      </section>
      <AboutUs />
      <Productslines />
      <section className="flex justify-start xl:hidden">
        <Decoration />
      </section>
      <ContactUs />
    </>
  );
}
