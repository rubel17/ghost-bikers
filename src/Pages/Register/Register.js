import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation  } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {
  const [error, setError] = useState('')
    const { createUser, googleSignIn, githubSignIn, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL, email,password)
        createUser(email, password)
        .then(result =>{
            const newUser = result.user
                console.log(newUser);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, {replace: true})
        })
        .catch(err=>{
          console.log(err)
          setError(`${err.message} Input Valid Email And Password`);
        });
    };

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            // const user = res.user;
            // console.log(user);
        })
        .catch(err => console.error(err));
    };

    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(res =>{
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err));
    };

    const handleUpdateUserProfile = (name, photoURL) =>{
     const profile ={
      displayName:name,
      photoURL:photoURL
     }
      updateUserProfile(profile)
      .then((res) =>{})
      .catch(err =>console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1  className="text-5xl font-bold">Create Your Account!</h1>
            <p className="py-6">You uses the Educare website for learning, Please create a new Account,otherwise login your Account.</p>

            <button onClick={handleGoogleSignIn } className="btn btn-outline btn-info mr-4">Google Sign In</button>
            <button onClick={handleGithubSignIn } className="btn btn-outline btn-success"> Github Sign In</button>


           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="photoURL" name='photoURL' placeholder="photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                <label className="label">
                 <p>have an Account? <Link to='/account' className="label-text-alt link link-hover text-error">Please login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                {error}
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;