import React from "react";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    product_name: "",
    product_price: 0,
    product_location: "",
    product_shipping: "",
    product_quantity: 0,
    product_description: "",
    product_condition: "",
    product_image: "",
    product_guarantee: "",
    product_details: "",
    product_status: "",
    category: "",
    imageUrl: "",
  });

  const [isLoading, setLoading] = useState(false);

  const displayProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/displaySingleProduct/${id}`
      );

      if (!response.ok) {
        throw new Error("Error fetching product data");
      }

      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    displayProduct();
  }, [id]);

  return (
    <div className="bg-gray-100 py-24 lg:py-8 min-h-screen flex justify-center  items-center">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row  space-y-8 ">
          <div className="md:flex-1 px-4 flex flex-col items-center mx-auto w-full">
            <div className="text-sm breadcrumbs text-black px-4 mx-auto">
              <ul>
                <li>
                  <Link to={"/outletzone/tienda"} className="">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="lowercase">
                    <p className="uppercase"> {product.category[0]}</p>
                    {product.category.slice(1)}
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="capitalize">
                    {product.product_name}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-[560px] rounded-lg mb-4">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={product.imageUrl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2  gap-4 ">
              <div className="w-1/2 px-2">
                <button className="w-full btn border-none  dark:bg-yellow-400 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Añadir al carrito
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full btn bg-gray-200 border-none dark:bg-yellow-400 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Háblanos por Whatsapp
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-24 mx-auto ">
            <h2 className="text-3xl font-bold text-gray-800  mb-2 flex items-center gap-4">
              {product.product_name}
              <div className="text-white badge">
                {product.product_guarantee}
              </div>
            </h2>

            <div className="flex mb-4 items-center">
              <div className="mr-4 space-x-2 ">
                <span className="text-gray-600 text-5xl font-extrabold">
                  ${product.product_price}
                </span>
              </div>
            </div>
            <div className="space-x-2 my-2">
              <span className="font-bold text-gray-700  text-2xl">
                Disponibles:
              </span>
              <span className="text-gray-600 text-lg">
                {product.product_quantity}
              </span>
            </div>

            <div>
              <span className="font-bold text-gray-700 text-2xl ">
                Descripción del producto:
              </span>
              <p className="text-gray-600  text-lg mt-2 ">
                {product.product_description}
              </p>
            </div>
            <div className="mt-4">
              <span className="font-bold text-gray-700 text-2xl">
                Ubicación:
              </span>
              <span className="text-gray-600 ml-2 capitalize text-lg">
                {product.product_location}
              </span>
            </div>
            <div className="mt-4 ">
              <span className="font-bold text-gray-700 text-2xl ">Estado:</span>
              <span className="text-gray-600 ml-2 capitalize text-lg">
                {product.product_condition}
              </span>
            </div>
            <div className="  mt-4">
              <span className="font-bold text-gray-700 text-2xl ">
                Detalles:
              </span>
              <span className="flex   text-gray-600   text-lg">
                {product.product_details}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
