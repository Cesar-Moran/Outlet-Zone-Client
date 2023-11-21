import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar fixed bg-gradient-to-b z-50 from-[#000000e2] to-[#00000023] text-white   ">
      <div className="navbar-start container w-full md:w-[50%]">
        <div className="dropdown w-full">
          <div className="flex items-center justify-between md:flex">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <a className="flex items-center mx-auto gap-4 cursor-default text-xl">
              {" "}
              <img
                src="https://torrente15.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
                className="w-16 h-16 rounded-lg"
              ></img>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/outletzone/tienda"}>Tienda</Link>
              <ul className="p-2 text-white">
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
            </li>
            <li>
              <a>Contactos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={1}>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li tabIndex={2}>
            <details>
              <summary>Tienda</summary>
              <ul className="p-2 text-white">
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
            </details>
          </li>
          <li tabIndex={3}>
            <a>Contáctanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
