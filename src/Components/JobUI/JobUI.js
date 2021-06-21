import React from 'react';
import fakeData from '../../FakeData/fakeData';
import JobSection from '../JobSection/JobSection';

const JobUI = () => {
    return (
        <div className="container">

           <div className="row">
          
            {
                fakeData.map(job =><JobSection job={job}></JobSection>)
            }
            
         
           </div>
        </div>
    );
};

export default JobUI;