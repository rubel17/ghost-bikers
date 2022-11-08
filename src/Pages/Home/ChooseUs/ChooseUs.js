import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from  '../../../assets/image/images-1.png';
import img2 from  '../../../assets/image/images-2.jpeg';
import img3 from  '../../../assets/image/images-3.jpeg';
import img4 from  '../../../assets/image/images-4.png';
import img5 from  '../../../assets/image/images-5.png';
import img6 from  '../../../assets/image/images-6.png';

const ChooseUs = () => {
    return (
        <div className='my-3'>
            <h1 className='text-center text-success'>Six reasons why choose us</h1>
            <hr className='w-50 mx-auto' />
            <div className='my-5'>
                <Container>
                <Row>
                    <Col className='d-flex' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img1} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Premium quality</h4>
                            <p>We guarantee quality of our works <br/>from the  diagnostic to repairs.</p>
                           </div>
                    </Col>
                    <Col className='d-flex' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img2} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Dependable Services</h4>
                            <p>We love to take pride in the work we do. Each project is finished in time and budget</p>
                           </div>
                    </Col>
                    <Col className='d-flex' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img3} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Reputable Company</h4>
                            <p>Operating for more than 30 years, earning a reputation for service and beautiful work</p>
                           </div>
                    </Col>
                    <Col className='d-flex mt-5' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img4} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Free Consultations</h4>
                            <p>We offer free consultations for our services, and will provide you with an actual quote</p>
                           </div>
                    </Col>
                    <Col className='d-flex mt-5' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img5} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Online services</h4>
                            <p>You can be assured of our support 24 hours a day, 7 days a week.</p>
                           </div>
                    </Col>
                    <Col className='d-flex mt-5' sm={12} lg={4}>
                           <div className='me-3'>
                            <img src={img6} width="80px"  alt="" />
                           </div>
                           <div>
                            <h4>Exclusive offers</h4>
                            <p>Motorcycles repair is carried out at a highly professional level.</p>
                           </div>
                    </Col>
                    
                 </Row>
                 </Container>
            </div>
        </div>
    );
};

export default ChooseUs;