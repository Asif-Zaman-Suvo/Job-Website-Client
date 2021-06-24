import React from 'react';
import './EmployeeDashboard.css';
import {Link} from "react-router-dom";

const EmployeeDashboard = () => {
    return (

        <div className='dashboard'>
            <h1 className='pt-5 pl-3'>Employee Dashboard</h1>

           <Link to='/addJob'> <h6 className='pt-5 pl-3'>Add a job for job seeker </h6></Link>

           <Link to='/'> <h6 className='pt-5 pl-3'>Go to homepage</h6></Link>
          
        </div>

        
 
    );
};

export default EmployeeDashboard;