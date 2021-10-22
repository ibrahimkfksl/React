import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { mixed } from "yup/lib/locale";

function SignUp() {
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
      validationSchema,
    });
  //return kismi daha bir sadelesti!
  //handleSubmit: butonun submit oldugnu anlamak icin kullanilir
  //handleChange: input icerisindeki degisikliligi anlamak icin kullanilir
  //handleBlur: inputtan ayrildigini bilmemiz icin
  //values: inputtaki value ler
  //errors: formdaki errorlar
  //touched: daha once inputa focus olunmus mu
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          placeholder="please enter your email"
          onBlur={handleBlur}
        />
        {/** handleblur inputtan ayrildigi anda calistir demek, touched icin gerekli */}
        {errors.email && touched.email && (
          <div className="error">
            {errors.email}
          </div> /** touched focus oldugunda calistir demek */
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          placeholder="please enter your password"
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          onChange={handleChange}
          placeholder="please enter your password again"
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
