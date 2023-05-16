import React, { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        

        // create user with email and password
        createUser(email, password)
        .then(result => {
            const signUpUser = result.user;
            setSuccess('User signup successfully!');
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
              <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
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
                    required
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
                    value="Sign Up"
                  />
                </div>
              </form>
              <div>
                <span className="mr-2 text-[#737373] text-lg">
                  Already have an account?
                </span>
                <Link className="text-[#FF3811] font-medium" to="/login">
                  Login
                </Link>
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

export default Signup;
