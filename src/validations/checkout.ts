import { InferType, object, string } from "yup";

export const checkoutSchema = object({
  cardName: string()
    .required("O nome do cartão é obrigatório")
    .min(3, "O nome do cartão deve conter no mínimo 3 caracteres")
    .test("has-lastname", "O nome deve conter sobrenome", (value) => {
      const names = value.split(" ");
      if (names.length > 1 && names[1].length > 3) return true;
      return names.length > 1;
    }),
  cardNumber: string()
    .required("O número de cartão é obrigatório")
    .min(15, "O número do cartão deve conter 15 digitos"),
  cardExpMonth: string()
    .required("O mês de expiração é obrigatório")
    .test("is-expired", "O cartão está expirado", (value, ctx) => {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();
      if (parseInt(ctx.parent.cardExpYear) === currentYear) {
        return parseInt(value) > currentMonth;
      }
      return true;
    }),
  cardExpYear: string()
    .required("O ano de expiração é obrigatório")
    .test("is-expired", "O cartão está expirado", (value, ctx) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      if (parseInt(value) === currentYear) {
        return parseInt(ctx.parent.cardExpMonth) >= currentMonth;
      }
      if (parseInt(value) > currentYear) return true;

      return false;
    }),
  cardCvc: string()
    .required("CVV é obrigatório")
    .min(3, "O código de segurança deve conter 3 ou 4 digitos")
    .max(4),
});

export type CheckoutType = InferType<typeof checkoutSchema>;
