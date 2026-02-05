import * as z from "zod";
import validateMessage from "../languages/vi/validate.json";
export const userSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: validateMessage.users["email.required"],
    }),
  password: z.string().min(1, {
    message: validateMessage.users["password.required"],
  }),
});
