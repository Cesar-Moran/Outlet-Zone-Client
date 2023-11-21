import { Link } from "react-router-dom";
import FaTiktok from "react-icons/fa";
import IoLogoWhatsapp from "react-icons/io";
import RiInstagramFill from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <ul className="list-none flex flex-col md:flex-row gap-8">
          <li>
            <Link
              to={"/outletzone/contacto"}
              className="link link-hover font-medium"
            >
              Contáctanos
            </Link>
          </li>

          <li>
            <Link
              to={"/outletzone/tienda"}
              className="link link-hover font-medium"
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/aires-acondicionados "}
              className="link link-hover "
            >
              Aires Acondicionados
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/neveras"}
              className="link link-hover "
            >
              Neveras
            </Link>
          </li>

          <li>
            <Link
              to={"/outletzone/tienda/lavadoras"}
              className="link link-hover "
            >
              Lavadoras
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/telefonos"}
              className="link link-hover "
            >
              Telefonos
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/estufas"}
              className="link link-hover "
            >
              Estufas
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/computadores-laptops"}
              className="link link-hover "
            >
              Computadores/Laptops
            </Link>
          </li>
          <li>
            <Link
              to={"/outletzone/tienda/articulos-hogar"}
              className="link link-hover "
            >
              Articulos del hogar
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/outletzonecolombia/"
            className="hover:scale-105 hover:cursor-pointer duration-300"
          >
            <FaTiktok size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@outletzonecolombia"
            className="hover:scale-105 hover:cursor-pointer duration-300"
          >
            <IoLogoWhatsapp size={22} />
          </a>
          <a className="hover:scale-105 hover:cursor-pointer duration-300">
            <RiInstagramFill size={22} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Outlet Zone</p>
      </aside>
    </footer>
  );
};
