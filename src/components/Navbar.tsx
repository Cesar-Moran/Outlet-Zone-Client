import { Link } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import { useUserContext } from "../providers/UserProvider";
import { DesktopCart } from "./DesktopCart";
import { User } from "lucide-react";

export const Navbar = () => {
  const user = useUserContext();

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="w-full flex items-center justify-between lg:px-60  mx-auto p-2 fixed top-0  z-30 bg-[#ffffff3f] backdrop-blur-lg text-black  ">
      <MobileNavbar />
      <Link to={"/"} className="hidden lg:block text-xl font-bold font-mono">
        <p>Outlet Zone</p>
      </Link>
      <div className="navbar-center justify-between hidden lg:flex   ">
        <ul className="menu menu-horizontal items-center px-1 ">
          <Link to={"/"} className="hover:scale-105 duration-200 p-3">
            <li>Inicio</li>
          </Link>
          <Link to={"/outletzone/tienda"}>
            <li tabIndex={2}>Tienda</li>
          </Link>
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
                    <button>{user.role}</button>
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
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex ">
            {" "}
            <DesktopCart />
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
