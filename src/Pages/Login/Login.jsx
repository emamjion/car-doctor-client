import React, { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {loginUser} = useContext(AuthContext);  
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        // signin with email and password
        loginUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          setSuccess('User login successfully!');
          form.reset();
          setError('');
        })
        .catch(error => {
          console.error(error.message);
          setError(error.message);
          setSuccess('');
        })
    }
  
    return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border p-6">
            <div className="card-body">
              <h1 className="text-4xl font-semibold text-center">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#FF3811] outline-none border-none"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div>
                <span className="mr-2 text-[#737373] text-lg">Don't have an account?</span>
                <Link className="text-[#FF3811] font-medium" to="/signup">Sign Up</Link>
              </div>
              <div className="text-center">
                <p className="text-green-500 font-bold text-lg">{success}</p>
                <p className="text-[#ff3811] font-bold text-lg">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
