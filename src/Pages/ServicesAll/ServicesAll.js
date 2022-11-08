import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


const ServicesAll = () => {
    const allData = useLoaderData();
    return (
        <div>
            <Container >
                <Row>
            {
                allData?.map(aData=>(
           
             <Col key={aData._id} sm={12} lg={4}>
                    <Card  className='mx-auto my-lg-5 my-2' style={{ width: '18rem', height:'600px' }}>
                        <Card.Img variant="top" style={{ height:'300px' }} src={aData.picture} />
                        <Card.Body>
                            <Card.Title>{aData.title}</Card.Title>
                            <Card.Text>
                            {aData.description.slice(0,100)}
                            </Card.Text>
                            <h4>Price:{aData.price}</h4>
                            <div>
                                <p>Ratings:{aData.rating}</p>
                            </div>
                            <Link to={`/GhostBikers/${aData._id}`}><Button variant="primary" className='w-100'>Details</Button></Link>
                        </Card.Body>
                        </Card>
                       
                    </Col>
                ))
            }
             </Row>  
            </Container>
        </div>
    );
};

export default ServicesAll;