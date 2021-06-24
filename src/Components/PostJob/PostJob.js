import React, { useContext, useState } from 'react';
import EmployeeDashboard from '../EmployeeDashboard/EmployeeDashboard';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const PostJob = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
       
        fetch('https://nameless-falls-77652.herokuapp.com/addJob',{
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body:JSON.stringify(data)

        })

        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Job post successfully')
            }
        })

        alert(JSON.stringify(data));
    };
    return (
        <div className="row">
            <div className="col-md-3">
                <EmployeeDashboard></EmployeeDashboard>
            </div>


            <div className="col-md-9 ">
                <div style={{ width: '550px', height: "450px", top: '10px' }} className="card text-center">

                    <div className="card-body">

                        <p className='volunteerText'>Post A Job For Job Seekers</p>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='form-group'>
                                <input type='text'
                                    placeholder="Full Name"
                                    {...register("Name", {
                                        required: "this is a required",
                                        maxLength: {
                                            value: 20,
                                            message: "Max length is 25"
                                        }
                                    })}
                                    defaultValue={loggedInUser.name}
                                />

                            </div>

                            <div className='form-group'>
                                <input type='text'
                                    placeholder="Job Type"
                                    {...register("JobType", {
                                        required: "this is a required",

                                    })}

                                    defaultValue={''}
                                />

                            </div>

                            <div className='form-group'>
                                <input type='text'
                                    placeholder="Company Name"
                                    {...register("CompanyName", {
                                        required: "this is a required",

                                    })}

                                    defaultValue={''}
                                />

                            </div>



                            <input type="submit" />
                        </form>

                    </div>


                </div>




            </div>




        </div>
    );
};

export default PostJob;