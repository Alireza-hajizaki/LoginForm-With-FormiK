import { useFormik } from "formik";
import * as Yup from 'yup';

const Form = () => {

  const initialValues = {
    email:'',
    password:'',
  }

  const onSubmit = values => {
    console.log("values" , values);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema, 
  });

  console.log(formik.errors)

  return (
    <section style={{ 
      backgroundImage: `url("images/background2.jpg")`
    }}>
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={formik.handleSubmit}>
            <h2>Login</h2>

            <div className="input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
              name="email" 
              type="text"
              {...formik.getFieldProps('email')}
              required
              />
              <label htmlFor="email">Email</label>
            </div>
            {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}

            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
              name="password" 
              type="password"
              {...formik.getFieldProps('password')}
              required
              />
              <label htmlFor="password">Password</label>
            </div>
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}

            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me
                <a href="/#"> | Forget Password</a>
              </label>
            </div>

            <button type="submit">Log in</button>

            <div className="register">
              <p>
                Don't have a account <a href="/#">Register</a>
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
