import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import OurMission from './OurMission/OurMission';
import Services from './Services/Services';

const Home = () => {
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