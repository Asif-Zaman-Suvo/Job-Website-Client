import React, {useState,useEffect,useContext } from 'react';
import fakeData from '../../FakeData/fakeData';
import JobSection from '../JobSection/JobSection';
import {UserContext} from '../../App'

const JobUI = () => {

    const [addJob,setAddJob]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    useEffect(()=>{
        fetch ('https://nameless-falls-77652.herokuapp.com/jobs?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setAddJob(data));
       

    },[])
    return (
        <div className="container">

           <div className="row">
          
            {
                addJob.map((job) =><JobSection job={job}></JobSection>)
            }
            
         
           </div>
        </div>
    );
};

export default JobUI;