import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const OpenAccountPage = () => {
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>

                   <Link to='/jobSeekerAccount'> <Button className='mt-5 text-center' variant='primary'>As A Job Seeker Account</Button></Link>

                   <Link to="/employeeAccount"> <Button className='mt-5 text-center' variant='success'>As A Employee Account</Button></Link>
                </div>
                <div className='col-md-4'></div>




            </div>



        </div>
    );
};

export default OpenAccountPage;