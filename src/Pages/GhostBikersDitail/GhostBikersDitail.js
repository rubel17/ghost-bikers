import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GhostBikersDitail = () => {
    const {title, description, picture} = useLoaderData();
    return (
        <div className='text-center my-2'>
            <img className='mb-3' src={picture} style={{ width: '32rem', height:'500px' }} alt="" />
            <h3> <strong className='text-danger'>Title:</strong>  {title}</h3>
            <h4> <strong className='text-info'>Description:</strong> {description}</h4>
        </div>
    );
};

export default GhostBikersDitail;