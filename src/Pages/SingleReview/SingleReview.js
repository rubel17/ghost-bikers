import React from 'react';
import {TrashIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';



const SingleReview = ({review, handleDeleteReview,handleStatusReview, ToastContainer }) => {
    const {price,serviceName, images, _id, status} = review;


    return (
        <tr>
        <td> <Link onClick={()=>handleDeleteReview(_id)}><TrashIcon style={{ width: '2rem', height: '50px', marginLeft:'10px' }}></TrashIcon></Link> </td>

        <td> <img src={images} style={{ width: '6rem', height: '60px', marginRight:'10px' }} alt=''/> {serviceName}</td>

        <td>
            <Link to={`/editReview/${_id}`}><button className='btn'>Edit</button></Link>
         </td>

        <td>{price}</td>

        <td>
            <Link onClick={()=>handleStatusReview(_id)}>{status? status : 'pending'}</Link>
            <ToastContainer />
        </td>

      </tr>
    );
};

export default SingleReview;