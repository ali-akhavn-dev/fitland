import { toast } from "sonner";

const validateSchema = (schema, value, showToast = false) => {
  const result = schema.safeParse(value);
  const isValid = result.success;
  if (!isValid) {
    showToast && toast.error(result.error.issues?.at(0).message);
    return false;
  }
  return true;
};

export { validateSchema };
