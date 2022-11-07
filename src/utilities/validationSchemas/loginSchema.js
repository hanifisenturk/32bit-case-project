import { object, string } from "yup";

export const loginSchema = object({
  name: string().required("Name is required"),
  mail: string().email().required(),
  password: string().min(8).required(),
});
