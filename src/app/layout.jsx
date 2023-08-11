import Footer from "@/components/ui/Footer.jsx";
import '../style/globals.css';

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
      </body>
    </html>
  );
}
