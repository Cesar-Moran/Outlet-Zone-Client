import * as yup from "yup";
const requiredMessage = "Este campo es obligatorio.";

export const schemaAddProduct = yup.object().shape({
  product_name: yup.string().required(requiredMessage),
  product_price: yup.string().required(requiredMessage),
  product_quantity: yup.string().required(requiredMessage),
  product_location: yup.string().required(requiredMessage),
  product_shipping: yup.string().required(requiredMessage),
  product_status: yup.string().required(requiredMessage),
  product_guarantee: yup.string().required(requiredMessage),
  product_category: yup.string().required(requiredMessage),
  product_description: yup.string().required(requiredMessage),
  product_condition: yup.string().required(requiredMessage),
  product_details: yup.string().required(requiredMessage),
  product_image: yup.mixed().required("File is required"),
});
