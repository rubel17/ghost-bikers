import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const GhostBikersDitail = () => {
    const {title,price,rating, description, picture} = useLoaderData();
    return (
        <div className='text-center my-5'>
            <img className='mb-3' src={picture} style={{ width: '32rem', height:'500px' }} alt="" />
            <div className='d-flex justify-content-around'>
            <p>Price:{price}</p>
            <p>Ratings:{rating}</p>
            </div>
            <h3 className='fs-2 fw-semibold'> <strong className='text-danger'>Title:</strong>  {title}</h3>
            <h4> <strong className='text-info'>Description:</strong> {description}</h4>
            <div className='my-4 border border-3 py-3'>
                <h4 className='text-danger'>Review The Service and Add The Service. <br /> Add Service, Login First....</h4>
                <Link to='/addService'><button className='btn btn-success'>Add Service</button></Link>
            </div>
        </div>
    );
};

export default GhostBikersDitail;