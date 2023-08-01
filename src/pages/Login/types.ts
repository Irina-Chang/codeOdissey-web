import * as yup from "yup"
import i18n from "@locales/i18n";


export const schema = yup.object({
    email: yup.string().required().email().max(350),
    password: yup
        .string()
        .required()
        .min(8)
        .max(64)
        .matches(/\d+/, i18n.t("login.form.validation.password.number"))
        .matches(/[a-z]+/, i18n.t("login.form.validation.password.lowercase"))
        .matches(/[A-Z]+/, i18n.t("login.form.validation.password.uppercase"))
        .matches(/[\W_]+/, i18n.t("login.form.validation.password.special")),
  }).required();
