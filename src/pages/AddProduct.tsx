import { useEffect, useState } from "react";

export const AddProduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_location, setProductLocation] = useState("");
  const [product_shipping, setProductShipping] = useState("");
  const [product_quantity, setProductQuantity] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_condition, setProductCondition] = useState("");
  const [product_details, setProductDetails] = useState("");
  const [product_image, setProductImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      // Add other cases if needed
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

      default:
        break;
    }
  };

  const onSubmit = async (ev: any) => {
    ev.preventDefault();

    console.log("form submitted");
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_price", product_price);
    formData.append("product_location", product_location);
    formData.append("product_shipping", product_shipping);
    formData.append("product_quantity", product_quantity);
    formData.append("product_description", product_description);
    formData.append("product_condition", product_condition);
    formData.append("product_details", product_details);
    product_image && formData.append("product_image", product_image);

    try {
      console.log(formData);
      const response = await fetch("http://localhost:4000/api/addProduct", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto items-center w-full">
      <form
        className="flex flex-col gap-4 w-full max-w-5xl "
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="product_name"
          placeholder="Nombre del producto"
          className="p-4 bg-transparent border "
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
          placeholder="Envio hacia"
          className="p-4 bg-transparent border "
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_description"
          placeholder="Descripción del producto"
          className="p-4 bg-transparent border "
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
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};
