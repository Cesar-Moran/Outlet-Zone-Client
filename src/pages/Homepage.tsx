import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Homepage = () => {
  const [firstCardIsClicked, setFirstCardClicked] = useState(false);
  const [secondCardIsClicked, setSecondCardClicked] = useState(false);
  const [thirdCardIsClicked, setThirdCardClicked] = useState(false);

  return (
    <article className="z-10">
      <section className="hero min-h-screen bg-[url(https://media.gettyimages.com/id/1259269839/es/foto/encendiendo-el-aire-acondicionado.jpg?s=612x612&w=0&k=20&c=utruz5SdpWfZaoQtjepqzB38aH2gyDmkVQN7qNDdDdY=)] bg-cover ">
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
          <div className="  bg-yellow-500 text-white text-start shadow-xl rounded-3xl w-full">
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
                    <span className="opacity-0">Leer mas</span>
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

          <div className="divider divider-horizontal divider-neutral"></div>
          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          {/* Second card */}
          <div className="  bg-yellow-500 text-white text-start shadow-xl  rounded-3xl  w-full">
            <div className="max-w-xl">
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
                    <span className="opacity-0">Leer mas</span>
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
          <div className="divider divider-horizontal divider-neutral"></div>

          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          {/* Third card */}
          <div className="  bg-yellow-500 text-white text-start shadow-xl  rounded-3xl w-full">
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
                    <span className="opacity-0">Leer mas</span>
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
        <Link to={"/outletzone/tienda"}>
          {" "}
          <img src="https://torrente15.files.wordpress.com/2023/11/19330956.jpg"></img>
        </Link>
        <h2 className="text-3xl">¿Por qué elegirnos?</h2>
        <section className="flex flex-col md:flex-row gap-4 px-8 relative">
          <div className="glass bg-yellow-400 text-white p-8 text-start shadow-xl ">
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

          <div className="divider divider-horizontal divider-neutral"></div>
          <div className="glass bg-yellow-400 text-white p-8 text-start shadow-xl relative top-0 md:top-20">
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
          <div className="divider divider-horizontal divider-neutral"></div>

          <div className="glass bg-yellow-400 text-white p-8 text-start shadow-xl relative ">
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
        <div className="divider "></div>
      </main>
    </article>
  );
};
