import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import { MobileDropdown } from "./MobileNavbar";
import { useUserContext } from "../providers/UserProvider";
import { useEffect, useState } from "react";
import { CartDropdown } from "./CartDropdown";
import { User } from "lucide-react";
import { Test } from "./Test";

export const Navbar = () => {
  const user = useUserContext();

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="w-full flex items-center justify-between lg:px-60  mx-auto p-2 sticky top-0  z-30 bg-[#ffffff3f] backdrop-blur-lg text-black  ">
      <MobileDropdown />

      <Link to={"/"} className="hidden lg:block">
        <img
          src="https://outletzone7.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
          alt="OutletZone logo"
          className="h-12 w-12 rounded-lg"
        />
      </Link>

      <div className="navbar-center justify-between hidden lg:flex   ">
        <ul className="menu menu-horizontal items-center px-1 ">
          <li tabIndex={1}>
            <Link to={"/"}>Inicio</Link>
          </li>

          <li tabIndex={2}>
            <details>
              <summary>Tienda</summary>
              <ul className="p-2 text-white">
                <li>
                  <Link to={"/outletzone/tienda "} className="link link-hover ">
                    General
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
            </details>
          </li>
          {user ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end  ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle hover:text-yellow-500 duration-200"
                >
                  <User />
                </div>
                <ul className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button onClick={logOut}>Log out</button>
                  </li>
                  {user.role === "ADMIN" ? (
                    <li>
                      <Link to={"/outletzone/admin/añadir-producto"}>
                        Añadir un producto
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 ">
              {" "}
              <li className="border rounded-lg btn btn-sm text-white">
                <Link to={"/outletzone/register"}>Registrarse</Link>
              </li>
              <li className="border rounded-lg  btn btn-sm text-white">
                <Link to={"/outletzone/login"}>Login</Link>
              </li>
            </div>
          )}
          <div className="flex ">
            {" "}
            <Test />
            <Link
              to={"/outletzone/contacto"}
              className="btn ml-4 my-0 bg-yellow-400  border-none text-white"
            >
              <li className="my-0">Contáctanos</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};
