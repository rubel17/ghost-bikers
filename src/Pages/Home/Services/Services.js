import React, { useEffect, useState } from 'react';

const Services = () => {
    const [loadData, setLoadData] = useState();

    useEffect(()=>{
        fetch('https://ghost-bikers-server.vercel.app/Ghost-Bikers/')
        .then(res=>res.json())
        .then(data=>setLoadData(data))
    },[]);

    return (
        <div>
           
        </div>
    );
};

export default Services;