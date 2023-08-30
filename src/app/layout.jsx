import Footer from "@/components/shared/Footer.jsx";
import '../style/globals.css';
import ButtonUp from "@/components/ui/ButtonUp";

export const metadata = {
  title: 'Sircraft Page',
  description: 'Making stories with our hands',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
        <ButtonUp />
      </body>
    </html>
  );
}
