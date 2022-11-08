import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';





const Footer = () => {
  return (
    <MDBFooter  className='pt-3 text-center text-lg-start text-muted bg-info'>
       <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                GHOST BIKERS
              </h6>
              <p>
                Here you can use rows and columns <br /> to organize our footer content.
              </p>
            </MDBCol>
            

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link to='/angular' className='text-reset'>
                  Angular
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset'>
                  React
                </Link>
              </p>
              <p>
                <Link to='vue' className='text-reset'>
                  Vue
                </Link>
              </p>
              <p>
                <Link to='/laravel' className='text-reset'>
                  Laravel
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/pricing' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link to='/settings' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p>
                <Link to='/services' className='text-reset'>
                  Services
                </Link>
              </p>
              <p>
                <Link to='/help' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Dhaka,Bangladesh-1200.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rubelrk377@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 019 00000000
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 017 00000000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <Link className='text-reset fw-bold' to='https://mdbootstrap.com/'>
          GhostBikers
        </Link>
      </div>
    </MDBFooter>

  );
};
export default Footer;