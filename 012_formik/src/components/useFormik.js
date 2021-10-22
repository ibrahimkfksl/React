import React from "react";
import { useFormik } from "formik"; //formik için import işlemleri

function useFormik() {
  const { handleSubmit, values, handleChange } = useFormik(
    {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobbies: [],
      country: "",
    },
    {
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    }
  );
  //return kismi daha bir sadelesti!
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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

        <select name="country" onChange={handleChange} value={values.country}>
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
    </div>
  );
}

export default useFormik;
