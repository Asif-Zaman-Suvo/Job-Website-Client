import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Resource/logo.jpg';
import './JobSeekerAccount.css';

const JobSeekerAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };


    return (
        <div className='container mt-3 pt-3'>
            <Link to="/">
                <img style={{ marginLeft: '40%' }} src={logo} alt="" width="150px" />
            </Link>
            <div style={{ width: '550px', height: "450px", top: '50px', left: '265px' }} className="card text-center registrationForm">

                <div className="card-body">

                    <p className='volunteerText'>Create An Account as a Job Seeker</p>

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
                            <input
                                placeholder="Username or Email"
                                type="text"
                                {...register("email", {
                                    required: "this is required",

                                })}
                                defaultValue={loggedInUser.email}
                            />

                        </div>


                        <div className='form-group'>
                            <input
                                placeholder="Date"
                                {...register("date", {
                                    required: "this is required",

                                })}
                            />

                        </div>

                        <div className='form-group'>
                            <input type='text'
                                placeholder="Interested Job"
                                {...register("Interested Job", {
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



    );
};

export default JobSeekerAccount;