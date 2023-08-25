import { Formik } from "formik";
import * as Yup from "yup";
import { FormContainer } from "../assets/styles";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  phone: Yup.string()
    .required("phone is a required field")
    .min(8, "phone must be at least 8 characters"),
});

const Login = () => {
  return (
    <FormContainer>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", phone: "" }}
        onSubmit={(values) => {
            
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">

              <form noValidate onSubmit={handleSubmit}>
                <span>Sign Up</span>

                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>

                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter full name"
                  className="form-control inp_text"
                  id="name"
                />
        
               <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email address"
                  className="form-control inp_text"
                  id="email"
                />
             
                <p className="error">
                  {errors.phone && touched.phone && errors.phone}
                </p>
                <input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Phone number e.g: +234... "
                  className="form-control"
                />


                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Create password"
                  className="form-control"
                />


                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <input
                  type="password"
                  name="password2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password2}
                  placeholder="Confirm password"
                  className="form-control"
                />
                
                <button type="submit">Sign up</button>
              </form>
              <p className="account">Already have an account? <a href="/login">Log In</a></p>
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Login;