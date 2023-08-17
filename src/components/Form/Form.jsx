import * as Yup from 'yup';
import { Formik ,Form ,Field ,ErrorMessage } from "formik";
import TextError from '../TextError';

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

const PerfectForm = () => {
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <section style={{ 
      backgroundImage: `url("images/background2.jpg")`
    }}>
      <div className="form-box">
        <div className="form-value">
          <Form>
            <h2>Login</h2>

            <div className="input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <Field 
              name="email" 
              type="text"
              required
              />
              <label htmlFor="email">Email</label>
            </div>
            {/* first way: use component props */}
            <ErrorMessage name='email' component={TextError}/>

            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <Field 
              name="password" 
              type="password"
              required
              />
              <label htmlFor="password">Password</label>
            </div>
            {/* second way: use children */}
            <ErrorMessage name='password'>
              {(errorMsg) => <div className='error'>{errorMsg}</div>}
            </ErrorMessage>

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

          </Form>
        </div>
      </div>
    </section>
    </Formik>
  );
};

export default PerfectForm;
