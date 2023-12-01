import { useState } from "react";

export const AddProduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_location, setProductLocation] = useState("");
  const [product_shipping, setProductShipping] = useState("");
  const [product_quantity, setProductQuantity] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_condition, setProductCondition] = useState("");
  const [product_details, setProductDetails] = useState("");
  const [product_guarantee, setProductGuarantee] = useState("");
  const [category, setCategory] = useState("");
  const [product_status, setProductStatus] = useState("");
  console.log(product_status);
  const [product_image, setProductImage] = useState<File | null>(null);

  const statusOptions = [
    { optionText: "USADO" },
    { optionText: "POCO USADO" },
    { optionText: "CASI NUEVO" },
    { optionText: "NUEVO" },
  ];
  const guaranteeOptions = [
    { optionText: "SIN GARANTIA" },
    { optionText: "CON GARANTIA" },
  ];
  const categoryOptions = [
    { optionText: "NEVERA" },
    { optionText: "LAVADORA" },
    { optionText: "CELULAR" },
    { optionText: "ESTUFA" },
    { optionText: "TELEVISOR" },
    { optionText: "LAPTOP/PC", value: "COMPUTADORA" },
    { optionText: "ARTICULO PARA HOGAR", value: "ARTICULOPARAHOGAR" },
  ];

  const handleStatusSelect = (event: any) => {
    setProductStatus(event.target.value);
  };

  const handleGuaranteeSelect = (event: any) => {
    setProductGuarantee(event.target.value);
  };

  const handleCategorySelect = (event: any) => {
    setCategory(event.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "product_name":
        setProductName(value);
        break;
      case "product_price":
        setProductPrice(value);
        break;
      case "product_location":
        setProductLocation(value);
        break;
      case "product_shipping":
        setProductShipping(value);
        break;

      case "product_quantity":
        setProductQuantity(value);
        break;

      case "product_description":
        setProductDescription(value);
        break;
      case "product_condition":
        setProductCondition(value);
        break;

      case "product_details":
        setProductDetails(value);
        break;
      case "category":
        setCategory(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_price", product_price);
    formData.append("product_location", product_location);
    formData.append("product_shipping", product_shipping);
    formData.append("product_quantity", product_quantity);
    formData.append("product_description", product_description);
    formData.append("product_condition", product_condition);
    formData.append("product_details", product_details);
    formData.append("product_status", product_status);
    formData.append("product_guarantee", product_guarantee);
    formData.append("category", category);
    product_image && formData.append("product_image", product_image);

    try {
      await fetch("/api/addProduct", {
        method: "POST",

        body: formData,
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto items-center w-full px-4">
      <form
        className="flex flex-col my-40 gap-4 w-full max-w-5xl text-black"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="product_name"
          placeholder="Nombre del producto"
          className="p-4 bg-transparent border"
          onChange={handleChange}
        />
        <div className="number-inputs flex w-full gap-4 justify-between items-center">
          <input
            type="number"
            name="product_price"
            placeholder="Precio del producto"
            className="p-4 bg-transparent border w-full max-w-lg"
            onChange={handleChange}
          />
          <input
            type="number"
            name="product_quantity"
            placeholder="Cantidad"
            className="p-4 bg-transparent border w-full max-w-lg"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="product_location"
          placeholder="Ubicación"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_shipping"
          placeholder="Envio"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <div className="space-y-3 text-white">
          <h2>El producto está usado, poco usado, casi nuevo o nuevo?</h2>

          <select className="w-full select" onChange={handleStatusSelect}>
            {statusOptions.map((option) => (
              <option value={option.optionText}>{option.optionText}</option>
            ))}
          </select>
          <select className="w-full select" onChange={handleGuaranteeSelect}>
            {guaranteeOptions.map((option) => (
              <option value={option.optionText}>{option.optionText}</option>
            ))}
          </select>
          <select className="w-full select" onChange={handleCategorySelect}>
            {categoryOptions.map((option) => (
              <option value={option.value}>{option.optionText}</option>
            ))}
          </select>

          <div className="text-black">
            <p> {product_status}</p>
            <p>{product_guarantee}</p>
            <p>{category}</p>
          </div>
        </div>
        <textarea
          name="product_description"
          placeholder="Descripción del producto"
          className="p-4 bg-transparent border text-black"
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_condition"
          placeholder="Condición del producto"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_details"
          placeholder="Detalles del producto"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />{" "}
        <input
          type="file"
          name="product_image"
          id="image"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files && event.target.files.length > 0) {
              setProductImage(event.target.files[0]);
            }
          }}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};
