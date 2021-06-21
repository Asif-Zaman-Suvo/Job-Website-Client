import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const SinglePrice = ({ p }) => {
    return (
        <div className="col-md-3 pt-5 ml-5">
            <div style={{ textDecoration: 'none' }}>
                <Card style={{ width: '15em', backgroundColor: 'yellow' }}>
                    <Card.Body className="text-center">
                        <h6>Billed Monthly</h6>
                        <h1 style={{fontWeight:'900'}} className="text-dark">{p.name}</h1>
                        <p>Mobile Optimize</p>
                        <p>Best Packages</p>
                        <p>Happy Customer</p>
                        <h5 style={{fontWeight:'900'}} className="text-dark">{p.price}</h5>
                       <Link to="/accountInfo"> <button className='btn-btn btn-primary'>Purchase</button></Link>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default SinglePrice;