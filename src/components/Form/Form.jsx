const Form = () => {
  return (
    <section style={{ 
      backgroundImage: `url("images/background2.jpg")`
    }}>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <input name="email" type="text" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input name="password" type="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me
                <a href="#">Forget Password</a>
              </label>
              
            </div>
            <button>Log in</button>
            <div className="register">
              <p>
                Don't have a account <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
