import { Formik } from "formik";
import * as Yup from "yup";
import { FormContainer } from "../assets/styles";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  return (
    <FormContainer>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
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
                <span>Login</span>
        
               <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
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
                  placeholder="Enter password"
                  className="form-control"
                />
                
                <button type="submit">Login</button>
              </form>
              <p className="account">Dont have an account? <a href="/register">Sign Up</a></p>
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Login;