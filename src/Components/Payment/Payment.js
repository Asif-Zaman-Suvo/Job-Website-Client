import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import {Link} from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import papalImg from '../../Resource/paypal.png';
import card1 from '../../Resource/amex.png';
import card2 from '../../Resource/mastercard.png';
import card3 from '../../Resource/visa.jpg';

const stripePromise = loadStripe('pk_test_51HZuZyJAmJyYwlCnPReYKG010Sz8ntJSPjP9TzrbGOoIWaUSzko33IADrzXoHnhAiJfeRjmRbSjWYlMqxBoJjqZ400krvsPeqj');

const Payment = () => {
    return (
      
       
        <div className=" container mt-5 pt-5">
            <div className="  row allSteps mb-5">
                <div align="right" className="col-md-4 p-0">
                    <span className="activestep">1</span>
                </div>
                <div className="col-md-4 centerstep"></div>
                <div align="center" className="col-md-4 p-0 "><span className="activestep ">2</span></div>
                <div align="left" className="col-md-4 p-0"><span className="singleStap">3</span></div>
            </div>


            <div className="paypalPayment py-4 px-3 border my-3">
                <div className="row">
                    <div className="col-md-8">
                        <fieldset class="form-group">
                            <div class="form-check">
                                <input class="form-check-input mt-2" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                <label class="form-check-label font-weight-bold" for="gridRadios1">
                                    Cradit Card
                        </label>
                            </div>
                        </fieldset>

                        <p className='mt-0'><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small></p>
                        <Elements stripe={stripePromise}>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </Elements>
                    </div>

                    <div className='col-md-4' align="right">
                        <img style={{width:'100px'}} className='m-1' src={card1} alt="" />
                        <img style={{width:'100px'}} className='m-1' src={card2} alt="" />
                        <img style={{width:'100px'}} className='m-1' src={card3} alt="" />
                    </div>
                </div>
            </div>
            <div className="paypalPayment py-4 px-3 border my-3">
                <div className="row">
                    <div className="col-md-8">
                        <fieldset class="form-group">
                            <div class="form-check">
                                <input class="form-check-input mt-2" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                <label class="form-check-label font-weight-bold" for="gridRadios1">
                                    Paypal
                        </label>
                            </div>
                        </fieldset>

                        <p className='mt-0'><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small></p>

                    </div>

                    <div  className='col-md-4' align="right"><img style={{width:'50px'}} src={papalImg} alt="" /></div>
                </div>
            </div>

            <div align="right">
                    <Link to="/employeeDashboard"><button type="button" class="btn bg-warning btn-lg font-weight-bold px-5 mt-4" >Confirm</button></Link>
                </div>




        </div>
        
      
    
    );
};

export default Payment;