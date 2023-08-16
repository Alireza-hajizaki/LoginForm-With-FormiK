const Form = () => {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2 className="hh">Login</h2>
            <div className="input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" required />
              <label htmlFor="" className="gg">Email</label>
            </div>
            <div className="input-box">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forget Password</a>
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
