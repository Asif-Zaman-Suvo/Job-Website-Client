import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const JobSection = ({job}) => {
    return (
        <div className="col-md-3 pt-5">
            <Link style={{ textDecoration: 'none' }} to={`/job/${job.name}`}>
                <Card style={{ width: '15em' }}>
                    <Card.Img variant="top" style={{ height: '18em', borderRadius: 'none' }} src={job.img} />
                    <Card.Body className="text-center">
                        <h6 className="text-dark">{job.name}</h6>
                        <button>Apply</button>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default JobSection;