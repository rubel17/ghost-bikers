import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Link } from "react-router-dom";

const Services = () => {
    const [loadData, setLoadData] = useState();

    useEffect(()=>{
        fetch('http://localhost:4000/GhostBikersLimit')
        .then(res=>res.json())
        .then(data=>setLoadData(data))
    },[]);

    return (
      <div>
        <h2>Our Services</h2>
          <div  className='d-lg-flex justify-content-around my-5'>
           {
            loadData?.map(lData =><Service 
            key={lData._id}
            lData={lData}
            
            ></Service>)
           }
           
        </div>
        <Link to='/servicesall'>See All</Link>
      </div>
    );
};

export default Services;