import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { schemaRegister } from "../../components/schemas/schemaRegister";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    setValue,
  } = useForm({
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegister),
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async () => {
    await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Logueado");
          return response.json(); // Parse the response JSON
        } else {
          console.log("Hubo un problema tio");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data);
        navigateTo("/");
        window.location.reload();
      });
  };

  return (
    <section className="bg-gray-50 ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-yellow-400">
              Loguéate!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  value={user.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="nombre@gmail.com"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mt-2">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  value={user.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }: any) => (
                    <p className="text-red-500 text-start text-sm mt-2">
                      {message}
                    </p>
                  )}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-400 hover:bg-primary00 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Crear cuenta
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <Link
                  to={"/outletzone/register"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
