import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation  } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Register = () => {
  const [error, setError] = useState('')
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
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
            const user = res.user;
            console.log(user);
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
        <div className="my-3">
        <div className="d-lg-flex justify-content-around ">
          <div className="text-center my-5">
            <h1  className="text-5xl font-bold">Create Your Account!</h1>

            <button onClick={handleGoogleSignIn } className="btn btn-outline btn-info">Google Sign In</button>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="border border-3 p-2 card-body">
              <div className="form-control">

              <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" name='name' placeholder="Your Full Name" className="form-control" required/>
                </div>
              </div>
              <div className="form-control">
              <label className="form-label">Photo URL</label>
                    <input type="photoURL" name='photoURL' placeholder="photo URL" className="form-control" required/>
              </div>
              <div className="form-control">
              <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input  type="email" name='email' placeholder="Your Email"  className="form-control" required/>
                </div>
              </div>
              <div className="form-control">

               <label className="form-label">Password</label>
                    <input type="password" name='password' placeholder="Your Password" className="form-control"  required/>

                <label className="label">
                 <p>have an Account? <Link to='/login' className="text-danger">Please login</Link></p>
                </label>
              </div>
              <div className="form-control">
              <div className='text-danger'> 
               {error}
               </div>
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;