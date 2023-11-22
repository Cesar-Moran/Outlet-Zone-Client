import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LetsTalk } from "../components/LetsTalk";
import { FAQ } from "../components/FAQ";
import { ProductsMarquee } from "../components/ProductsMarquee";

export const Homepage = () => {
  const [firstCardIsClicked, setFirstCardClicked] = useState(true);
  const [secondCardIsClicked, setSecondCardClicked] = useState(true);
  const [thirdCardIsClicked, setThirdCardClicked] = useState(true);

  const images = [
    "https://outletzone7.files.wordpress.com/2023/11/22-1685985038-e1700626356471.jpg",
    "https://outletzone7.files.wordpress.com/2023/11/19330956-3284904655-e1700626312513.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar a la siguiente imagen en el array
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Cambia este valor a la cantidad de milisegundos que desees entre cambios de imagen

    return () => {
      // Limpiar el intervalo al desmontar el componente
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "contain",
  };

  return (
    <article className="z-10">
      <section
        className="hero min-h-screen bg-no-repeat sm:bg-repeat   "
        style={backgroundImageStyle}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div>
              {" "}
              <h1 className="mb-5 text-5xl font-bold text-yellow-400">
                Hola, bienvenido!
              </h1>
              <p className="mb-5 text-white">
                Productos de calidad y reparaciones expertas para tu hogar.
                Confía en nosotros, cuidamos de lo que más importa.
              </p>
              <Link to={"/outletzone/contacto"}>
                <button className="btn bg-yellow-400 border-none text-white">
                  Contactanos
                </button>
              </Link>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <ArrowDown className="animate-pulse translate-y-80" size={50} />
            </div>
          </div>
        </div>
      </section>
      <main className=" bg-white  flex flex-col gap-20 text-center py-20 text-black italic ">
        <h2 className="text-3xl font-semibold ">¿A qué nos dedicamos?</h2>
        <section className="px-8 flex flex-col md:flex-row gap-4 ">
          {/* First card */}
          {/* First card */}
          {/* First card */}
          {/* First card */}
          <div className=" hero bg-yellow-500 text-white text-start shadow-xl rounded-3xl w-full bg-[url(https://outletzone7.files.wordpress.com/2023/11/woman-taking-out-eggs-from-fridge-morning-breakfast-housewife-getting-helthy-eggs-other-ingredients-from-refrigerator-her-kitchen.jpg)]">
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="max-w-xl">
              <blockquote className="text-lg font-semibold px-8 pt-8 ">
                Electrodomésticos de Calidad para tu Hogar
              </blockquote>
              <div className="divider"></div>
              <button
                className="w-full"
                onClick={() => setFirstCardClicked(!firstCardIsClicked)}
              >
                {firstCardIsClicked ? (
                  <p className="mx-auto flex items-center justify-center gap-4  ">
                    <FaEyeSlash size={60} />
                    <span className="opacity-0 hidden">Leer mas</span>
                  </p>
                ) : (
                  <p className="mx-auto flex items-center justify-center   gap-4 ">
                    <FaEye size={60} />
                    <span className="opacity-100 font-medium">Leer mas</span>
                  </p>
                )}
              </button>

              <p
                className={
                  firstCardIsClicked
                    ? "translate-x-0 max-h-[400px] peer-focus:opacity-100  duration-200 p-8"
                    : "opacity-0 max-h-[400px] -translate-x-3/4  duration-200 p-8"
                }
              >
                Venta y reparación de electrodomésticos de calidad. Descubre
                nuestra gama premium para tu hogar y obtén soluciones
                confiables. Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>

          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          <div className="hero  bg-[url(https://outletzone7.files.wordpress.com/2023/11/repairman-doing-air-conditioner-service.jpg)]  text-white text-start shadow-xl  rounded-3xl  w-full">
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="max-w-xl ">
              <blockquote className="text-lg font-semibold px-8 pt-8 ">
                Reparación Confiable para tus Electrodomésticos
              </blockquote>
              <div className="divider"></div>
              <button
                className="w-full"
                onClick={() => setSecondCardClicked(!secondCardIsClicked)}
              >
                {secondCardIsClicked ? (
                  <p className="mx-auto flex items-center justify-center gap-4  ">
                    <FaEyeSlash size={60} />
                    <span className="opacity-0 hidden">Leer mas</span>
                  </p>
                ) : (
                  <p className="mx-auto flex items-center justify-center   gap-4 ">
                    <FaEye size={60} />
                    <span className="opacity-100 font-medium">Leer mas</span>
                  </p>
                )}
              </button>

              <p
                className={
                  secondCardIsClicked
                    ? "translate-x-0 max-h-[400px] peer-focus:opacity-100  duration-200 p-8"
                    : "opacity-0 max-h-[400px] -translate-x-3/4  duration-200 p-8"
                }
              >
                No dejes que un electrodoméstico averiado arruine tu día.
                Nuestro equipo experto está aquí para reparar tus dispositivos
                rápidamente. Funcionamiento óptimo, sin complicaciones
              </p>
            </div>
          </div>

          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          <div className=" hero bg-[url(https://img.freepik.com/free-photo/portrait-attractive-hispanic-handyman-writing-work-estimate-before-fixing-kitchen-sink_662251-2690.jpg?w=1380&t=st=1700681444~exp=1700682044~hmac=99bbd26781998766013d742dfd4f67d76ac0897a83f43f0f48f14778f3c3e71b)]  text-white text-start shadow-xl  rounded-3xl w-full">
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="max-w-xl">
              <blockquote className="text-lg font-semibold px-8 pt-8 ">
                Prevención para un Funcionamiento Óptimo
              </blockquote>
              <div className="divider"></div>
              <button
                className="w-full"
                onClick={() => setThirdCardClicked(!thirdCardIsClicked)}
              >
                {thirdCardIsClicked ? (
                  <p className="mx-auto flex items-center justify-center gap-4  ">
                    <FaEyeSlash size={60} />
                    <span className="opacity-0 hidden">Leer mas</span>
                  </p>
                ) : (
                  <p className="mx-auto flex items-center justify-center   gap-4 ">
                    <FaEye size={60} />
                    <span className="opacity-100 font-medium">Leer mas</span>
                  </p>
                )}
              </button>

              <p
                className={
                  thirdCardIsClicked
                    ? "translate-x-0 max-h-[400px] peer-focus:opacity-100  duration-200 p-8"
                    : "opacity-0 max-h-[400px] -translate-x-3/4  duration-200 p-8"
                }
              >
                Previene problemas en tus electrodomésticos con nuestro
                mantenimiento especializado para neveras, lavadoras y aires
                acondicionados. Nuestro equipo asegura un rendimiento óptimo y
                longevidad.
              </p>
            </div>
          </div>
        </section>

        {/* End "a que nos dedicamos" section */}
        {/* End "a que nos dedicamos" section */}
        <div>
          <h2 className="text-3xl font-semibold">Nuestros productos</h2>
          <ProductsMarquee />
        </div>

        <div className="divider ">
          <ArrowDown size={100} />
        </div>
        <LetsTalk />

        <h2 className="text-3xl">¿Por qué elegirnos?</h2>
        <section className="flex flex-col md:flex-row gap-4 px-8 relative">
          <div className="glass card bg-yellow-400 text-white p-8 text-start shadow-xl ">
            <blockquote className="text-lg font-semibold">
              Experiencia Confiable
            </blockquote>
            <div className="divider"></div>
            <p>
              Con años de experiencia en la industria, nuestro equipo cuenta con
              el conocimiento necesario para abordar cualquier problema en tus
              electrodomésticos. Confía en nosotros para soluciones eficientes y
              duraderas.
            </p>
          </div>

          <div className="divider divider-horizontal"></div>
          <div className="glass card bg-yellow-400 text-white p-8 text-start shadow-xl relative top-0 md:top-20">
            <blockquote className="text-lg font-semibold">
              Servicio Rápido y Eficiente
            </blockquote>
            <div className="divider"></div>
            <p>
              Entendemos la importancia de tener tus electrodomésticos en pleno
              funcionamiento. Nuestro compromiso con un servicio rápido
              garantiza que resolveremos tus problemas en el menor tiempo
              posible, para que puedas disfrutar de la comodidad en tu hogar.
            </p>
          </div>
          <div className="divider divider-horizontal "></div>

          <div className="glass card bg-yellow-400 text-white p-8 text-start shadow-xl relative ">
            <blockquote className="text-lg font-semibold">
              Compromiso con la Satisfacción del Cliente
            </blockquote>
            <div className="divider"></div>
            <p>
              Tu satisfacción es nuestra prioridad. Ofrecemos un servicio
              personalizado y transparente, con precios competitivos. Estamos
              aquí para superar tus expectativas y asegurarnos de que tus
              electrodomésticos sigan funcionando de manera óptima.
            </p>
          </div>
        </section>
        {/* FAQ */}
        {/* FAQ */}
        {/* FAQ */}
        <section className="mt-32">
          <FAQ />
        </section>
      </main>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4728.848634830479!2d-74.1039055734908!3d4.687757880216167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDEnMTcuOSJOIDc0wrAwNicxMC4xIlc!5e0!3m2!1sen!2sco!4v1700683132981!5m2!1sen!2sco"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
      <img
        src="https://outletzone7.files.wordpress.com/2023/11/califica-1.jpg"
        alt="Califica nuestro servicio"
        className="bg-cover image-full "
      />
    </article>
  );
};
