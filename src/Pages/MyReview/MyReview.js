import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import SingleReview from '../SingleReview/SingleReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';



const MyReview = () => {
    const {user, logOut} =useContext(AuthContext)
    const{email} = user;
    const [reviews, setReviews]= useState([])
    useTitle('My Review');

    //delete review
    const handleDeleteReview = id =>{
        const proceed = window.confirm('Are You Sure, You want to Delete this Review');
        if(proceed){
            fetch(`https://ghost-bikers-server.vercel.app/reviewData/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    toast.success("Delete Successfully");
                  const remaining = reviews.filter(review =>review._id !== id);
                  setReviews(remaining);

                }
            })
        }
    }

    useEffect(()=>{
        fetch(`https://ghost-bikers-server.vercel.app/reviewData?email=${user.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res =>{

            if(res.status === 401 || res.status === 403){
               return logOut();
            }
         return res.json();
        })
        .then(data =>setReviews(data))
    },[user?.email, logOut]);

    return (
        <div className='w-75 mx-auto border border-5 p-2 m-3'>
           {reviews.length?
           <>
           <h3>{user?.email? email :'My'} - Review : {reviews.length}</h3>
            <Table>
            <thead>
                <tr>
                <th>Cancel</th>
                <th>Service</th>
                <th>Review</th>
                <th>Price</th>
                </tr>
            </thead>

            <tbody>
            {
        reviews.map(review =><SingleReview
        key={review._id}
        review={review}
        handleDeleteReview={handleDeleteReview}
        ></SingleReview>)
        }
        </tbody>
        </Table> </> :
        <div>
            <h3 className='text-warning text-center my-5 py-5'>'No reviews were added'</h3>
        </div>
        }
        <ToastContainer />
    </div>
    );
};

export default MyReview;