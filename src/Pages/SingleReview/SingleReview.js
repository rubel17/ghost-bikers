import React from 'react';
import {TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';



const SingleReview = ({review, handleDeleteReview, handleUpdateReview, ToastContainer }) => {
    const {price,serviceName, images, _id, status} = review;


    return (
        <tr>
        <td> <Link onClick={()=>handleDeleteReview(_id)}><TrashIcon style={{ width: '2rem', height: '50px', marginLeft:'10px' }}></TrashIcon></Link> </td>

        <td> <img src={images} style={{ width: '6rem', height: '60px', marginRight:'10px' }} alt=''/> {serviceName}</td>

        <td>
            <Link onClick={()=>handleUpdateReview(_id)} to='/editReview'>Edit</Link>
            <ToastContainer />
         </td>
        <td>{price}</td>
        <td>
            <Link onClick={()=>handleUpdateReview(_id)}>{status? status : 'pending'}</Link>
            <ToastContainer />
        </td>
      </tr>
    );
};

export default SingleReview;