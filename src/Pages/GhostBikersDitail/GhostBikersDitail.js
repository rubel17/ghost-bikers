import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const GhostBikersDitail = () => {
    const {user} = useContext(AuthContext)
    const {title,price,rating, description, picture, _id} = useLoaderData();
    return (
        <div className='text-center my-5'>
            <img className='mb-3' src={picture} style={{ width: '32rem', height:'500px' }} alt="" />
            <div className='d-flex justify-content-around'>
            <p>Price:{price}</p>
            <p>Ratings:{rating}</p>
            </div>
            <h3 className='fs-2 fw-semibold'> <strong className='text-danger'>Title:-</strong>  {title}</h3>
            <h6 className='mx-5'> <strong className='text-info'>Description:-</strong> {description}</h6>
            <div className='m-5 border border-5 py-3'>
                {
                    user?<h4 className='text-danger'>Click The Button</h4> : <h4 className='text-danger'>Please Login.</h4>
                }
                <Link to={`/addService/${_id}`}><button className='btn btn-success'>Add Reviews</button></Link>
            </div>
        </div>
    );
};

export default GhostBikersDitail;