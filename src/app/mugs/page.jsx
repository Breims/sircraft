import Image from "next/image";
import coverMugs from "@public/assets/images/lines/cover-mugs.jpg";
import mugs1 from "@public/assets/images/lines/mugs1.jpg";
import mugs2 from "@public/assets/images/lines/mugs2.jpg";
import NavbarLines from "@/components/ui/NavbarLines";
import * as constants from "../../style/linesStyles.js";

const Mugs = () => {
  return (
    <>
      <header>
        <NavbarLines />
        <section className="relative">
          <figure className="grid place-content-center">
            <Image
              className="lg:w-screen object-cover"
              src={coverMugs}
              alt="coverMugs"
            />
          </figure>
          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <p className="h-full mt-6 grid place-content-center place-items-center text-white font-HelveticaBold text-2xl md:text-5xl lg:text-8xl md:mt-0 animate-fade-down animate-once animate-duration-500 animate-delay-300">
              MUGS PERSONALIZADOS
            </p>
          </div>
        </section>
      </header>

      <main>
        <section className="bg-slate-100">
          <div className={constants.objectsGroupStart}>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
          </div>
          <div className={constants.contentPageGlobal}>
            <div className={constants.contentText}>
              <p className={constants.paragraph}>
                En SirCraft nuestro producto estrella son las tazas de
                sublimación, un artículo cotidiano que se transforma en una obra
                de arte personalizada. Utilizamos un innovador proceso de
                sublimación para imprimir tus diseños, fotos o mensajes
                especiales en la superficie de la taza. La sublimación garantiza
                una calidad de imagen nítida, duradera y resistente al paso del
                tiempo, permitiéndote disfrutar de tus recuerdos favoritos o
                mensajes inspiradores cada vez que tomes tu bebida favorita.
              </p>
              <p className={constants.paragraph}>
                Nuestro proceso de sublimación es un arte en sí mismo.
                Comenzamos con una taza de alta calidad y cubrimos su superficie
                con una capa especial que actúa como lienzo para tus creaciones.
                Luego, utilizando equipos de impresión avanzados y tintas de
                primera categoría, transferimos cuidadosamente tus diseños al
                material de la taza. La impresión se funde perfectamente con la
                taza a nivel molecular, lo que garantiza una apariencia
                brillante, sin bordes visibles y resistente a rayones o
                desgaste.
              </p>
              <p>
                Nuestro equipo de diseñadores y expertos en sublimación están
                dedicados a asegurar que cada taza que creemos refleje la
                belleza y calidad que esperas. Ya sea que elijas una taza con
                una imagen personalizada, un mensaje conmovedor o un diseño
                divertido, te garantizamos que el resultado será una pieza única
                que te encantará compartir o regalar a tus seres queridos.
              </p>
            </div>

            <div className={constants.containerImage}>
              <Image className={constants.imagesFill} src={mugs1} alt="mugs1" />
            </div>
          </div>
        </section>

        <section>
          <div className={constants.objectsGroupEnd}>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
          </div>

          <div className={constants.contentPageGlobal}>
            <div className={constants.containerImageOrderTwo}>
              <Image className={constants.imagesFill} src={mugs2} alt="mugs2" />
            </div>
            <div className={constants.contentTextOrderTwo}>
              <p className={constants.paragraph}>
                En nuestra tienda, entendemos que cada taza de sublimación tiene
                un significado especial y único para nuestros clientes. Nuestro
                objetivo es brindarte una experiencia excepcional al permitirte
                crear tazas que cuenten tu historia, celebren tus momentos más
                especiales o expresen tu personalidad. Imagina disfrutar de tu
                café matutino en una taza que contiene los momentos más
                preciados de tu vida o regalar una taza personalizada como un
                gesto significativo para alguien especial.
              </p>
              <p className={constants.paragraph}>
                Además de ofrecerte tazas personalizadas, también queremos
                brindarte una experiencia de compra sin complicaciones y un
                servicio al cliente excepcional. Nos enorgullecemos de la
                calidad de nuestros productos y del placer que brindan a
                nuestros clientes. Esperamos que nuestra pasión por la
                sublimación se refleje en cada taza que entregamos, y que cada
                taza se convierta en una pieza única y valiosa en tu vida
                diaria.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mugs;
