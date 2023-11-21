import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <article className="z-10">
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1436473849883-bb3464c23e93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div>
              {" "}
              <h1 className="mb-5 text-5xl font-bold">Hola, bienvenido!</h1>
              <p className="mb-5">
                Productos de calidad y reparaciones expertas para tu hogar.
                Confía en nosotros, cuidamos de lo que más importa.
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <ArrowDown className="animate-pulse translate-y-80" size={50} />
            </div>
          </div>
        </div>
      </section>
      <main className=" bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] min-h-screen flex flex-col gap-20 text-center py-20 text-black italic ">
        <h2 className="text-3xl">¿A qué nos dedicamos?</h2>
        <section className="flex flex-col px-8">
          <div className="flex flex-col  gap-4">
            <div className="glass   gap-8 bg-black text-white p-8 text-start ">
              <div className="max-w-3xl">
                <blockquote className="text-lg ">
                  Electrodomésticos de Calidad para tu Hogar
                </blockquote>
                <div className="divider"></div>
                <p className="max-w-5xl">
                  En nuestro compromiso de hacer tu vida más fácil, ofrecemos un
                  servicio integral que abarca desde la venta de
                  electrodomésticos de alta calidad hasta la reparación experta.
                  Explora nuestra gama premium de neveras, lavadoras y aires
                  acondicionados diseñados para mejorar tu hogar. Cuando surge
                  un problema, nuestro equipo de técnicos especializados está
                  listo para brindar soluciones rápidas y eficientes. Con
                  nosotros, obtienes calidad, confiabilidad y comodidad en un
                  solo lugar. Tu satisfacción y la funcionalidad de tu hogar son
                  nuestra prioridad número uno.
                </p>
              </div>
            </div>

            <div className="divider divider-horizontal divider-neutral"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="glass  bg-black text-white p-8 text-start max-w-7xl">
                <blockquote className="text-lg ">
                  Mantenimiento Preventivo
                </blockquote>
                <div className="divider"></div>
                <p>
                  Enfócate en la prevención para mantener tus electrodomésticos
                  en su mejor estado. Ofrecemos servicios de mantenimiento
                  preventivo especializados para neveras, lavadoras y aires
                  acondicionados. Nuestro equipo de técnicos expertos realiza
                  revisiones periódicas para evitar problemas futuros y
                  garantizar un rendimiento óptimo. Asegura la longevidad de tus
                  electrodomésticos con nuestro enfoque proactivo.
                </p>
              </div>

              <img
                src="https://media.gettyimages.com/id/1309901712/es/foto/female-hand-opens-fridge.jpg?s=612x612&w=0&k=20&c=wg7XVznvQlO5hrB-jwM_2LSEzdtCCMziYapPG6AnFyI="
                alt=""
                className="rounded-lg object-cover  h-52"
              />
            </div>
            <div className="divider divider-horizontal divider-neutral"></div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="glass  bg-black text-white p-8 text-start max-w-3xl">
                <div>
                  <blockquote className="text-lg ">
                    Soluciones Completas para tu Hogar
                  </blockquote>
                  <div className="divider"></div>
                  <p>
                    Descubre la excelencia en cada rincón de tu hogar con
                    nuestra gama de electrodomésticos premium. Desde neveras
                    elegantes hasta lavadoras eficientes y aires acondicionados
                    de última generación, ofrecemos productos que combinan
                    rendimiento, durabilidad y estilo. Transforma tu espacio con
                    lo mejor en tecnología para una vida más cómoda.
                  </p>
                </div>
              </div>
              <img
                src="https://media.gettyimages.com/id/70000521/es/foto/refrigerator.jpg?s=612x612&w=0&k=20&c=ZEWcavoDzzt_Re0ytCS-pCEAXLFP7GwIvat1G1nomKQ="
                alt=""
                className="h-60 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <Link to={"/outletzone/tienda"}>
          {" "}
          <img src="https://torrente15.files.wordpress.com/2023/11/19330956.jpg"></img>
        </Link>
        <h2 className="text-3xl">¿Por qué elegirnos?</h2>
        <section className="flex flex-col md:flex-row gap-4 px-8 relative">
          <div className="glass bg-black text-white p-8 text-start ">
            <blockquote className="text-lg ">Experiencia Confiable</blockquote>
            <div className="divider"></div>
            <p>
              Con años de experiencia en la industria, nuestro equipo cuenta con
              el conocimiento necesario para abordar cualquier problema en tus
              electrodomésticos. Confía en nosotros para soluciones eficientes y
              duraderas.
            </p>
          </div>

          <div className="divider divider-horizontal divider-neutral"></div>
          <div className="glass bg-black text-white p-8 text-start relative top-0 md:top-20">
            <blockquote className="text-lg ">
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

          <div className="glass bg-black text-white p-8 text-start relative ">
            <blockquote className="text-lg ">
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
