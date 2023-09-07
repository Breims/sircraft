import Footer from "@/components/shared/Footer.jsx";
import '../style/globals.css';
import ButtonUp from "@/components/ui/ButtonUp";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "300", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: 'Sircraft Page',
  description: 'Making stories with our hands',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es"  className={ poppins.className } >
      <body>
        {children}
        <Footer />
        <ButtonUp />
      </body>
    </html>
  );
}
