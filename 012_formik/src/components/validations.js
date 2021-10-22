import * as yup from "yup";
//validasyonu burada yapacagiz
let validations = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir e-mail girin")
    .required("e-mail bos birakilamaz"), //required sayesinde bos gondermez
  password: yup
    .string()
    .min(5, "parolaniz en az 5 karakter olmalidir")
    .required("zorunlu alan"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "parolalar uyusmuyor")
    .required("zorunlu alan"), //buradaki isimler kullandigin yer ile ayni olmali
});

export default validations;
