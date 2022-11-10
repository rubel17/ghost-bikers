import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Link } from "react-router-dom";

const Services = () => {
    const [loadData, setLoadData] = useState();

    useEffect(()=>{
        fetch('https://ghost-bikers-server.vercel.app/GhostBikersLimit',{
          headers:{
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
        .then(res=>res.json())
        .then(data=>setLoadData(data))
    },[]);

    return (
      <div>
        <h2 className='text-center text-success'>Our Services</h2>
        <h4 className='text-center text-warning'>WE PROVIDE BEST CUSTOM MOTORCYCLE</h4>
        <hr className='w-75 mx-auto' />
          <div  className='ms-5 ms-lg-0 d-lg-flex justify-content-around my-3'>
           {
            loadData?.map(lData =><Service 
            key={lData._id}
            lData={lData}
            
            ></Service>)
           }
           
        </div>
        <div className='d-flex justify-content-center pb-5'>
            <Link to='/servicesall'><button className='btn btn-primary px-5'>See All</button></Link>
        </div>
        
      </div>
    );
};

export default Services;