import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import { MobileCart } from "./MobileCart";

export const MobileNavbar = () => {
  const user = useUserContext();
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="navbar-start sticky top-0 lg:hidden w-full md:w-[100%] ">
      <div className="drawer lg:hidden ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex justify-between">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button bg-yellow-400 hover:bg-yellow-400 hover:opacity-60 border-none"
          >
            <RxHamburgerMenu />
          </label>
          <Link to={"/"}>
            {" "}
            <img
              src="https://outletzone7.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
              alt="OutletZone logo"
              className="h-12 w-12 rounded-lg"
            />
          </Link>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu lg:menu-horizontal p-4 w-80 min-h-full bg-white text-black backdrop-blur-md ">
            {/* Sidebar content here */}
            <li className="text-lg">
              <Link to={"/"}>Inicio</Link>
            </li>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <summary className="collapse-title text-lg">Tienda</summary>
              <ul className="p-2  collapse-content my-0 py-0">
                <li>
                  <Link
                    to={"/outletzone/tienda "}
                    className="link link-hover  "
                  >
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
              <li className="text-lg">
                <Link to={"/outletzone/contacto"}>Contáctanos</Link>
              </li>
            </div>
            <MobileCart />
            <div className="mt-8 ">
              {user && (
                <div>
                  <li>
                    <button>{user.role}</button>
                    <button>{user.email}</button>
                  </li>
                  {user.role === "DEV" ? (
                    <li>
                      <Link to={"/outletzone/dev/registerRequests"}>
                        Register requests
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <button onClick={logOut}>Log out</button>
                  </li>
                  {user.role === "ADMIN" || "DEV" ? (
                    <li>
                      <Link to={"/outletzone/admin/añadir-producto"}>
                        Añadir un producto
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
            <Link to={"/"} className="hidden lg:block">
              <img
                src="https://outletzone7.files.wordpress.com/2023/11/397349151_1073498366921565_8115290529435045220_n-1.jpg"
                alt="OutletZone logo"
                className="h-12 w-12 rounded-lg"
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
