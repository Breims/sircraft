import Image from "next/image";
import coverMuñeca from "@public/assets/images/lines/cover-muñeca.jpg";
import muñeca1 from "@public/assets/images/lines/muñeca1.jpg";
import muñeca2 from "@public/assets/images/lines/muñeca2.jpg";
import NavbarLines from "@/components/ui/NavbarLines";
import * as constants from "../../style/linesStyles.js";

const Dolls = () => {
  return (
    <>
      <header className="mt-16 lg:mt-0">
        <NavbarLines />
        <section className="relative">
          <figure className="grid place-content-center">
            <Image
              className="lg:w-screen object-cover"
              src={coverMuñeca}
              alt="coverMuñeca"
            />
          </figure>
          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <p className="h-full grid place-content-center place-items-center text-white font-HelveticaBold text-2xl md:text-5xl lg:text-7xl animate-fade-down animate-once animate-duration-500 animate-delay-300">
              ¡MUÑECAS ADORABLES!
            </p>
          </div>
        </section>
      </header>

      <main>
        <section>
          <div className={constants.objectsGroupStart}>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
          </div>
          <div className={constants.contentPageGlobal}>
            <div className={constants.contentText}>
              <p className={constants.paragraph}>
                Nuestras muñecas son auténticas creaciones artísticas que
                reflejan la pasión por el detalle y la belleza en cada puntada.
                El crochet y el uso de trapos nos permiten dar vida a muñecas
                encantadoras que despiertan sonrisas y emociones. Cada una de
                ellas está diseñada para convertirse en un compañero fiel, un
                regalo lleno de significado o simplemente una pieza decorativa
                que alegrará cualquier espacio.
              </p>
              <p className={constants.paragraph}>
                En SirCraft, el arte del crochet y el ingenio con los trapos se
                unen para dar vida a nuestras muñecas. Nuestro talentoso equipo
                de artesanos combina su habilidad con la creatividad, utilizando
                hilos de colores vibrantes y trapos suaves para tejer y dar
                forma a cada muñeca con dedicación y precisión.
              </p>
              <p>
                El crochet nos permite crear detalles encantadores y formas
                adorables, mientras que el uso de trapos nos da la posibilidad
                de agregar texturas y personalidad única a cada muñeca. Cada
                puntada es una expresión artística que refleja el cariño y la
                atención al detalle que ponemos en cada creación.
              </p>
            </div>

            <div className={constants.containerImage}>
              <Image
                className={constants.imagesFill}
                src={muñeca1}
                alt="muñeca1"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-100">
          <div className={constants.objectsGroupEnd}>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
            <div className={constants.objectsDecaration}></div>
          </div>

          <div className={constants.contentPageGlobal}>
            <div className={constants.containerImageOrderTwo}>
              <Image
                className={constants.imagesFill}
                src={muñeca2}
                alt="muñeca2"
              />
            </div>
            <div className={constants.contentTextOrderTwo}>
              <p className={constants.paragraph}>
                En SirCraft, creemos que las muñecas son mucho más que simples
                juguetes; son compañeras de aventuras, confidentes de sueños y
                testigos de momentos especiales. Nuestro propósito es ofrecerte
                muñecas que despierten la imaginación y la alegría en personas
                de todas las edades..
              </p>
              <p className={constants.paragraph}>
                Ya sea que busques una muñeca para un niño que necesita un amigo
                para jugar, un regalo especial para alguien querido o
                simplemente una pieza decorativa para tu hogar, nuestras muñecas
                son la elección perfecta. Cada muñeca está hecha con amor y
                cariño, llevando consigo un pedacito de la pasión por el arte y
                la artesanía que nos define.
              </p>
              <p className={constants.paragraph}>
                Nuestro deseo es que nuestras muñecas se conviertan en tesoros
                que formen parte de momentos memorables y que traigan alegría y
                calidez a tu vida. Cada muñeca tiene su propia personalidad y
                belleza, lista para acompañarte en tus aventuras y convertirse
                en una pieza preciada en tu colección.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dolls;
