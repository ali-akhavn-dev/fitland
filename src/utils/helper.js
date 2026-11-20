import { toast } from "sonner";

const replaceClass = (elem, removeClass, addClass) => {
  elem.classList.remove(removeClass);
  elem.classList.add(addClass);
};

const validateSchema = (schema, value, showToast = false) => {
  const result = schema.safeParse(value);
  const isValid = result.success;
  if (!isValid) {
    showToast && toast.error(result.error.issues?.at(0).message);
    return false;
  }
  return true;
};

const formatPrice = (value) => {
  if (!value) return 0;
  return Number(value).toLocaleString();
};

const getDiscountedPrice = (price, discount) => {
  return price - (price * discount) / 100;
};

export { validateSchema, replaceClass, formatPrice, getDiscountedPrice };
