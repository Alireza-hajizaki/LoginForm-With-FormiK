import { useFormik } from "formik";

const Form = () => {

  const initialValues = {
    email:'',
    password:'',
  }

  const onSubmit = values => {
    console.log("values" , values);
  }

  const validate = values => {
     let errors = {}

     if(!values.email){
      errors.email = 'Required'
     }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
      errors.email ='Invalid email format';
     }
     if(!values.password){
      errors.name = 'Required'
     }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate, 
  });

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
              ype="text" 
              onChange={formik.handleChange} 
              value={formik.values.email} 
              required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
              name="password" 
              type="password" 
              onChange={formik.handleChange} 
              value={formik.values.password} 
              required 
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me
                <a href="/#">Forget Password</a>
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
