import { MinusIcon, PlusIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

import { FaCartPlus } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  imageUrl: string;
  product_quantity: number;
};

export const MobileCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getLocalStorage = () => {
    const storedProducts = localStorage.getItem("cart");
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    setProducts(products);
    setProducts(parsedProducts);
  };

  const increaseQuantity = (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    // Encuentra el producto específico en el array
    const existingProduct = parsedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      // Aumenta la cantidad del producto específico
      existingProduct.product_quantity += 1;

      // Actualiza el estado y vuelve a guardar en localStorage
      setProducts([...parsedProducts]);
      localStorage.setItem("cart", JSON.stringify(parsedProducts));
    }
  };
  const decreaseQuantity = (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    // Encuentra el producto específico en el array
    const existingProduct = parsedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      // Aumenta la cantidad del producto específico
      existingProduct.product_quantity -= 1;

      // Actualiza el estado y vuelve a guardar en localStorage
      setProducts([...parsedProducts]);
      localStorage.setItem("cart", JSON.stringify(parsedProducts));
    }
  };

  const removeProductFromCart = (product: Product) => {
    const storedProducts = localStorage.getItem("cart");
    let parsedProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    const productToRemove = parsedProducts.findIndex(
      (p) => p.id === product.id
    );

    if (productToRemove !== -1) {
      parsedProducts.splice(productToRemove, 1);
      // Actualiza el estado del carrito
      setProducts([...parsedProducts]);

      // Guarda en el LocalStorage
      localStorage.setItem("cart", JSON.stringify(parsedProducts));
    }
  };
  const getCartTotal = () => {
    return products
      .reduce((total, product) => {
        const productPrice = product.product_price || 0;
        const productQuantity = product.product_quantity || 0;

        return total + productPrice * productQuantity;
      }, 0)
      .toLocaleString("es-CO", { style: "currency", currency: "COP" });
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <div className="drawer drawer-end z-50 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button  btn-ghost btn-circle  shadow-none bg-transparent border-none hover:text-yellow-400  text-lg  rounded-full btn btn-primary"
        >
          <FaCartPlus />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu min-h-full p-0 space-y-8 text-black bg-white  mb-4">
          <div className="flex items-center sticky top-0 bg-black bg-opacity-90 p-8">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay hover:cursor-pointer ml-4"
            >
              <X className="text-yellow-500 hover:scale-125 duration-200" />
            </label>
            <h1 className="text-xl lg:text-5xl mx-auto font-bold text-yellow-500">
              TU CARRITO ({products.length})
            </h1>
          </div>
          <div className="divider "></div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row items-center p-0 gap-8"
            >
              <img
                src={product.imageUrl}
                className=" lg:w-[250px] lg:h-[250px] object-contain p-0 rounded-xl"
              ></img>
              <div className="">
                <p className="text-lg lg:text-3xl font-bold text-yellow-500  mb-2 flex items-center gap-4 ">
                  {product.product_name}
                </p>
                <p className="text-yellow-500 text-lg lg:text-2xl font-semibold mb-2">
                  ${product.product_price}
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-4 ">
                  <div className=" flex  items-center  gap-8 border p-4 rounded-full flex-wrap ">
                    <button
                      className=" mx-auto"
                      disabled={product.product_quantity === 0}
                      onClick={() => decreaseQuantity(product)}
                    >
                      <MinusIcon />
                    </button>
                    <p className="text-lg font-medium  mx-auto">
                      {product.product_quantity}
                    </p>
                    <button
                      className=" mx-auto"
                      onClick={() => increaseQuantity(product)}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                  <button
                    className=" w-full py-4 font-medium rounded-lg   underline text-lg "
                    onClick={() => removeProductFromCart(product)}
                  >
                    Remover
                  </button>
                </div>
              </div>
              <div className="divider "></div>
            </div>
          ))}
          <div className="w-full px-8 pb-8 lg:fixed lg:bottom-1 ">
            <div className="space-y-4 w-full mx-auto ">
              {" "}
              <p className="text-lg font-bold flex justify-between items-center uppercase">
                Total: <span> {getCartTotal()}</span>
              </p>
              <button className="flex  items-center gap-2 z-50  rounded-full py-3 font-medium px-3 w-full mx-auto text-black border hover:bg-black hover:text-white  duration-200 leading-normal text-lg justify-center uppercase">
                Finalizar
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
