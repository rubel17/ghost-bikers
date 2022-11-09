import React from 'react';
import { Link } from 'react-router-dom';

const AllReview = ({review}) => {
    const {price,serviceName, images, _id, email} = review;
    return (
        <tr>
        <td> <img src={images} style={{ width: '6rem', height: '60px', marginRight:'10px' }} alt=''/> {serviceName}</td>
        <td><Link to={`/editReview/${_id}`}><button className='btn'>Edit</button></Link></td>
        <td>{price}</td>
        <td><Link><small>{email}</small></Link>
        </td>
      </tr>
    );
};

export default AllReview;