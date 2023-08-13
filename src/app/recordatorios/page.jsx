import Image from "next/image";
import coverRecordatorio from "@public/assets/images/lines/cover-recordatorio.jpg";
import recordatorio1 from "@public/assets/images/lines/recordatorio1.jpg";
import recordatorio2 from "@public/assets/images/lines/recordatorio2.jpg";
import NavbarLines from "@/components/ui/NavbarLines";
import * as constants from "../../style/linesStyles.js";

const Recordatorios = () => {
  return (
    <>
      <header className="mt-16 lg:mt-0">
        <NavbarLines />
        <section className="relative">
          <figure className="grid place-content-center">
            <Image
              className="lg:w-screen object-cover"
              src={coverRecordatorio}
              alt="coverRecordatorio"
            />
          </figure>
          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <p className="h-full grid place-content-center place-items-center text-white font-HelveticaBold text-xl md:text-5xl lg:text-7xl animate-fade-down animate-once animate-duration-500 animate-delay-300">
              ¡RECORDATORIOS DE TODO TIPO!
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
                Nuestros recordatorios son pequeñas piezas artísticas y
                confeccionadas a mano que capturan momentos inolvidables de tu
                vida. Desde delicados detalles en porcelanicrón hasta adorables
                creaciones en crochet y peluches, cada uno de nuestros
                recordatorios está diseñado para evocar emociones y transmitir
                mensajes especiales. Además, no olvides que también ofrecemos
                nuestros famosos mugs personalizados, que son perfectos para
                conmemorar cualquier ocasión especial.
              </p>
              <p className={constants.paragraph}>
                En nuestra tienda, la pasión por la artesanía y la atención al
                detalle son nuestro sello distintivo. Cada recordatorio se crea
                con esmero y dedicación por nuestro talentoso equipo de
                artesanos y diseñadores. Cuando eliges un recordatorio en
                porcelanicrón, nuestro equipo experto da vida a la porcelana
                fría modelándola con habilidad para reflejar tus momentos más
                preciados. Si prefieres un recordatorio en crochet, nuestros
                hábiles tejedores crean intrincados diseños utilizando hilos de
                alta calidad, dándole un toque tierno y delicado. Asimismo,
                nuestros peluches son confeccionados con materiales suaves y
                seguros para brindar la máxima ternura en cada detalle.
              </p>
              <p>
                En el caso de nuestros mugs personalizados, aplicamos el mismo
                proceso de sublimación que utilizamos en nuestra línea de tazas
                para café y bebidas. Cada mug se imprime cuidadosamente con tus
                diseños, fotografías o mensajes, asegurando que el resultado sea
                una obra de arte funcional que te acompañará en cada sorbo de tu
                bebida favorita.
              </p>
            </div>

            <div className={constants.containerImage}>
              <Image
                className={constants.imagesFill}
                src={recordatorio1}
                alt="recordatorio1"
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
                src={recordatorio2}
                alt="recordatorio2"
              />
            </div>
            <div className={constants.contentTextOrderTwo}>
              <p className={constants.paragraph}>
                En nuestra tienda, creemos que los recordatorios son más que
                simples objetos; son expresiones de amor, gratitud y cariño.
                Cada recordatorio que creamos tiene un propósito significativo:
                celebrar los momentos más especiales de la vida, honrar a seres
                queridos, transmitir mensajes de aliento y aprecio, y preservar
                los recuerdos más queridos.
              </p>
              <p className={constants.paragraph}>
                Nuestro objetivo es proporcionarte recordatorios que toquen el
                corazón y brinden alegría a quienes los reciben. Ya sea que
                elijas un delicado adorno en porcelanicrón, un tierno peluche,
                un encantador detalle en crochet o un mug personalizado, nuestro
                deseo es que cada pieza sea un testimonio duradero de tus
                momentos más felices.
              </p>
              <p className={constants.paragraph}>
                Desde bodas, cumpleaños, baby showers, hasta ocasiones
                especiales o simplemente para mostrar a alguien que te importa,
                nuestros recordatorios están diseñados para crear recuerdos
                inolvidables. No importa qué tipo de recordatorio elijas,
                sabemos que cada uno llevará consigo un mensaje y un lugar
                especiales en tu corazón.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Recordatorios;
