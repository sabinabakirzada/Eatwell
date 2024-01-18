import * as Yup from "yup";

export const EatSchema = Yup.object().shape({
  img: Yup.string().url().required("Enter a url!"),
  price: Yup.number()
    .min(10, "Very Cheap!")
    .max(500, "Too Expensive!")
    .required("Please enter a price"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Please enter a name"),
});
