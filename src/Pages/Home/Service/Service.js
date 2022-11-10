import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({lData}) => {
    const {description, picture, title, price, rating, _id} = lData;
    return (
        <div className='my-sm-5'>
         <Card style={{ width: '22rem', height:'500px' }}>
            <PhotoProvider>
                <PhotoView src={picture}>
                <Card.Img style={{height:'230px' }} variant="top" src={picture}/>
                </PhotoView>
                </PhotoProvider>
         <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description.slice(0,100)}
        </Card.Text>
        <h4>Price:{price}</h4>
        <div>
            <p>Ratings:{rating}</p>

        </div>
        <Link to={`/GhostBikers/${_id}`}><Button variant="primary" className='w-100'>View Details</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Service;