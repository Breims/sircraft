import Image from "next/image";
import coverLlavero from "@public/assets/images/lines/cover-llavero.jpg";
import llavero1 from "@public/assets/images/lines/llavero1.jpg";
import llavero2 from "@public/assets/images/lines/llavero2.jpg";
import NavbarLines from "@/components/ui/NavbarLines";
import * as constants from "../../style/linesStyles.js";

const Llaveros = () => {
  return (
    <>
      <header className="mt-16 lg:mt-0">
        <NavbarLines />
        <section className="relative">
          <figure className="grid place-content-center">
            <Image
              className="lg:w-screen object-cover"
              src={coverLlavero}
              alt="coverLlavero"
            />
          </figure>
          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <p className="h-full grid place-content-center place-items-center text-white font-HelveticaBold text-2xl md:text-5xl lg:text-7xl animate-fade-down animate-once animate-duration-500 animate-delay-300">
              ¡LLAVEROS ÚNICOS!
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
                Nuestros llaveros son pequeñas piezas de arte diseñadas para
                agregar un toque especial a tus llaves y accesorios. Cada uno de
                ellos es una muestra de creatividad y destreza, elaborados con
                materiales de alta calidad y un toque artesanal que los hace
                únicos. Ya sea que elijas un encantador llavero en crochet, una
                delicada creación en porcelana o un adorable diseño en peluche,
                cada llavero de SirCraft está diseñado para alegrar tus días y
                convertirse en un compañero inseparable.
              </p>
              <p className={constants.paragraph}>
                En SirCraft, la pasión por el arte y la artesanía se refleja en
                cada llavero que creamos. Nuestro talentoso equipo de artesanos
                especializados en crochet, porcelana y peluche dedica tiempo y
                cuidado a cada detalle para garantizar que nuestros llaveros
                sean auténticos y llenos de personalidad. Los llaveros en
                crochet son tejidos a mano con hilos suaves y coloridos, creando
                patrones y formas encantadoras que harán que tus llaves
                destaquen.
              </p>
              <p>
                Nuestros llaveros de porcelana son modelados con precisión
                utilizando porcelanicrón, logrando piezas delicadas y detalladas
                que transmiten elegancia y belleza. Y si te encantan los
                peluches, nuestros llaveros de peluche son suaves, adorables y
                están diseñados para robar corazones con su ternura. Cada
                llavero se crea con dedicación y habilidad artística, asegurando
                que el resultado sea una pequeña obra de arte que te acompañará
                a donde quiera que vayas.
              </p>
            </div>

            <div className={constants.containerImage}>
              <Image
                className={constants.imagesFill}
                src={llavero1}
                alt="llavero1"
              />
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
              <Image
                className={constants.imagesFill}
                src={llavero2}
                alt="llavero2"
              />
            </div>
            <div className={constants.contentTextOrderTwo}>
              <p className={constants.paragraph}>
                En SirCraft, creemos que los llaveros son más que simples
                accesorios; son expresiones de estilo, personalidad y un toque
                de alegría en tu día a día. Nuestro propósito es ofrecerte
                llaveros que te hagan sonreír cada vez que los veas, y que
                reflejen tu gusto personal y pasión por la creatividad.
              </p>
              <p className={constants.paragraph}>
                Nuestros llaveros son más que solo adornos, son una forma de
                llevar contigo algo especial y único. Puedes elegir un llavero
                con tus colores favoritos, un diseño que represente tus
                intereses o incluso una versión miniatura de un ser querido en
                forma de peluche.
              </p>
              <p className={constants.paragraph}>
                Además de ser un accesorio práctico, un llavero SirCraft es una
                excelente opción para regalar a tus seres queridos en ocasiones
                especiales. Es un regalo significativo y único que transmite
                cariño y atención a quienes más te importan.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Llaveros;
