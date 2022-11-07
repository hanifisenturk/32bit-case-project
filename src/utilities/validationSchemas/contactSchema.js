import { object, string } from "yup";
import "yup-phone";

export const contactSchema = object({
  name: string().required(),
  mail: string().email().required(),
  telephone: string().phone().required(),
  message: string().required(),
  country: string().required(),
});
