import React from "react";
import { Formik } from "formik"; //formik için import işlemleri

function BeginFormik() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobbies: [],
          country: "",
        }} //formikte state tanımlaması
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }} //bunlar bu sekilde prop olarak da gecilebilir ya da useFormik hook u kullanilabilir
        //buraya çok dikkat et formik property si bunlar
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            {/* formikten geliyor */}
            {/* 
                burayi kullanmak icin Form ve Field attribute larini formikten import et
                formik form yapisi, biz html yapicaz
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />{" "}
                id değeri initialValues deki değerler ile aynı olmalı 
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                <button type="submit">Submit</button>
              */}
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              onChange={handleChange}
              placeholder="please enter your first name"
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              onChange={handleChange}
              placeholder="please enter your last name"
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="please enter your email"
            />
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />

            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
              Football
            </div>

            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>

            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
              Photography
            </div>
            <br />
            <br />

            <select
              name="country"
              onChange={handleChange}
              value={values.country}
            >
              <option value="tr">Turkiye</option>
              <option value="en">England</option>
              <option value="usa">United States of America</option>
            </select>

            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default BeginFormik;
