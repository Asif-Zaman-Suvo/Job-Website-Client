import React ,{useState} from 'react';
import { Card } from 'react-bootstrap';


const JobSection = ({job}) => {
    
   
      const [disable, setDisable]=useState(false);

    
    
    return (
        <div className="col-md-3 pt-5">
           
                <Card style={{ width: '15em' }}>
                    <Card.Img variant="top" style={{ height: '18em', borderRadius: 'none' }} src={job.img} />
                    <Card.Body className="text-center">
                       
                        <h5 className='text-dark'>{job.JobType}</h5>
                        <h5 className='text-dark'>{job.CompanyName}</h5>
                        <h6 className="text-dark">{job.Name}</h6>

                        <button disabled={disable} onClick={() => setDisable(true)}>Apply</button>
                    </Card.Body>
                </Card>

               

        </div>
    );
};

export default JobSection;