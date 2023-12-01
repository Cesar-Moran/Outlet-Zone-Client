import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  product_name: string;
  product_price: number;
  product_status: string;
  imageUrl: string;
  product_quantity: number;
};

export const Shop = () => {
  const [products, setProducts] = useState([
    {
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
      product_status: "",
      imageUrl: "",
      category: "",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const [cart, setCart] = useState<Product[]>([]);

  const [emptyList, setEmptyList] = useState(false);
  const displayProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/displayProducts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.length <= 0) {
        setEmptyList(true);
      } else {
        setEmptyList(false);
      }
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const filterProductsByCategory = async (category: string) => {
    const response = await fetch(
      `http://localhost:4000/api/filterProductsByCategory/${category}`
    );

    const data = await response.json();
    if (data.length <= 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
    setProducts(data);
  };

  const handleCategoryChange = (event: any) => {
    const selectedCategory = event.target.value;
    filterProductsByCategory(selectedCategory);
  };

  const addProductToCart = async (product: Product) => {
    // Verifica la disponibilidad del producto antes de agregarlo al carrito
    const response = await fetch(
      `http://localhost:4000/api/verifyProductQuantity/${product.id}`
    );
    const data = await response.json();

    // El usuario solo debe poder agregar la cantidad que esté disponible y no más de esa cantidad.

    // Obtén el carrito actual del localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as Product[];

    // Busca si el producto ya está en el carrito
    const existingProduct = existingCart.find((p) => p.id === product.id);

    if (existingProduct) {
      const totalQuantity =
        existingProduct.product_quantity + product.product_quantity;

      if (totalQuantity > data.quantityAvailable) {
        throw new Error("No puedes agregar más del mismo producto");
      }

      // Si el producto ya está en el carrito y no supera la disponibilidad, incrementa la cantidad
      existingProduct.product_quantity = totalQuantity;
    } else {
      if (product.product_quantity > data.quantityAvailable) {
        throw new Error("No puedes agregar más del mismo producto");
      }

      // Si el producto no está en el carrito, agrégalo al carrito
      existingCart.push(product);
    }

    // Actualiza el estado y guarda el carrito en el localStorage
    setCart(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  useEffect(() => {
    displayProducts();
  }, []);

  return (
    <div className="min-h-screen container flex flex-col lg:flex-row   justify-around py-24 sm:py-24 gap-4  items-center mx-auto  text-center ">
      <div className=" lg:fixed top-24 left-0 px-12  lg:z-40 ">
        <div className="filter-rules w-full max-w-sm flex flex-col gap-4">
          {" "}
          <div className="flex flex-col">
            <h1 className="text-2xl">Filtrar por: </h1>
            <button onClick={displayProducts} className="text-xl">
              Resetear
            </button>
          </div>
          <select className=" mx-auto select" onChange={handleCategoryChange}>
            <option disabled selected>
              CATEGORIA
            </option>
            <option value="NEVERA">NEVERAS</option>
            <option value="ESTUFA">ESTUFAS</option>
            <option value="TELEFONO">TELEFONO</option>
            <option value="COMPUTADORA">COMPUTADORA</option>
          </select>
        </div>
      </div>
      <div className="divider divider-vertical "></div>
      <div className=" ">
        {isLoading ? (
          <div className="loading-dots">.</div>
        ) : (
          <div>
            {emptyList ? (
              <div className="w-full flex flex-col justify-center items-center gap-8">
                <img
                  src="https://outletzone7.files.wordpress.com/2023/11/no-results-found.png"
                  alt=""
                  className="h-[50px]"
                />
                <p className="text-xl">No hay ningún producto para mostrar</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-24 text-left ">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="card text-black shadow-lg text-lg w-full"
                  >
                    <p className="absolute bg-white badge text-black p-3">
                      {product.product_status}
                    </p>
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="w-full max-h-[400px] object-contain rounded-2xl"
                    />

                    <div className="p-8 flex flex-col space-y-2">
                      {" "}
                      <p className="text-xl">{product.product_name}</p>
                      <p className="text-5xl font-extrabold">
                        ${product.product_price}
                      </p>
                      <p className="badge p-4">
                        Envio {product.product_shipping}
                      </p>
                      <p className="badge p-4">{product.product_guarantee}</p>
                      <p className="badge p-4">{product.product_condition}</p>
                      <div className="flex gap-4">
                        <Link to={`/outletzone/tienda/producto/${product.id}`}>
                          <button className="btn text-white border-none bg-yellow-400">
                            Detalles
                          </button>
                        </Link>
                        <button
                          className="btn text-white border-none bg-yellow-400"
                          onClick={() =>
                            addProductToCart({
                              id: product.id,
                              product_name: product.product_name,
                              product_price: product.product_price,
                              product_status: product.product_status,
                              imageUrl: product.imageUrl,
                              product_quantity: product.product_quantity,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
