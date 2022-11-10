import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import OurMission from './OurMission/OurMission';
import Services from './Services/Services';

const Home = () => {
    const{loading} = useContext(AuthContext);
    useTitle('Home');

    if(loading){
        return <div className='text-center'>
            <div className="spinner-border m-5" role="status">
           <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <OurMission></OurMission>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <About></About>
        </div>
    );
};

export default Home;