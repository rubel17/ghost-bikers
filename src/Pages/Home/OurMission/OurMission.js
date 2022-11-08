import React from 'react';
import Card from 'react-bootstrap/Card';
import {WrenchIcon, UserIcon, SignalIcon } from '@heroicons/react/24/solid';

const OurMission = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
            <h3 className='text-danger'>OUR MISSION</h3>
            <h1>WELCOME THE <br />
                EYES OF WEST WIND</h1>
                <hr className='w-75 mx-auto' />
            </div>
            <div className='mt-5  d-lg-flex justify-content-around'>
           
           <Card className='bg-secondary mt-3' border="primary" style={{ width: '18rem', height: '300px' }}>
                <Card.Body className='text-light'>
                <WrenchIcon className='h-25 w-75 ps-5 mb-5'></WrenchIcon>
                <Card.Title>SOCIAL ACTION</Card.Title>
                <Card.Text>
                Donec massa sapien faucibus et molestie ac. Nec tincidunt praesent semper feugiat nibh sed In hac.
                </Card.Text>
                </Card.Body>
            </Card>
           <Card className='bg-secondary mt-3' border="primary" style={{ width: '18rem', height: '300px' }}>
                <Card.Body className='text-light'>
                <UserIcon className='h-25 w-75 ps-5 mb-5'></UserIcon>
                <Card.Title>COMMUNITY</Card.Title>
                <Card.Text>
                Aliquet bibendum enim facilisis gravida neque convallis a crasvel elit scelerisque mauris pellentesque.
                </Card.Text>
                </Card.Body>
            </Card>
           <Card className='bg-secondary mt-3' border="primary" style={{ width: '18rem', height: '300px' }}>
                <Card.Body className='text-light'>
                <SignalIcon className='h-25 w-75 ps-5 mb-5'></SignalIcon>
                <Card.Title>RIDE OUT</Card.Title>
                <Card.Text>
                Quisque non tellus orci ac auctor augue mauris augue. Pellentesque sit amet porttitor eget dolor.
                </Card.Text>
                </Card.Body>
            </Card>
           
          
           
            
            </div>
        </div>
    );
};

export default OurMission;