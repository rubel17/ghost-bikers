import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditReview = () => {
    const reviews = useLoaderData();
    const [user, setUser] = useState(reviews);


         //update review.
        const handleUpdatesReview = event =>{
            event.preventDefault();
            fetch(`http://localhost:4000/reviewData/${reviews?._id}`,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                toast.success("Update Successfully");
            })

            
    };

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...user};
        newReview[field] = value;
        setUser(newReview);
    };


    return (
        <div className='m-2 p-3 w-50 mx-auto border border-4 border-primary'>
            <h4>Edit Your Review</h4>

            <form onSubmit={handleUpdatesReview}>
            <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input onChange={handleInputChange} defaultValue={reviews?.serviceName} type="text" name='serviceName' placeholder='Service Name' className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input onChange={handleInputChange} type="email" name='email' placeholder='Your Email' defaultValue={reviews?.email} className="form-control"/>
            </div>
            
            <ToastContainer />
            <button type="submit" className="btn btn-primary">Update Review</button>
        </form>

        </div>
    );
};

export default EditReview;