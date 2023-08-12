import AboutUs from "@/components/AboutUs";
import HomePage from "@/components/HomePage";
import { NavbarLanding } from "@/components/ui/NavbarLanding";

export default function Home() {
  return (
    <>
      <NavbarLanding />
      <HomePage />
      <AboutUs />
    </>
  );
}
