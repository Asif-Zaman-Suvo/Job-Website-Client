import React from 'react';
import fakePrice from './fakePrice';
import SinglePrice from './SinglePrice';

const EmployeeAccount = () => {
    return (
        <div >
            <div className="Pricing Plans"/>
            <div align="center" className="container pt-5">
                <h1><span className="text-warning">Choose the other</span> that suits you</h1>
                
                <div className="row">
                    {
                        fakePrice.map(p=><SinglePrice p={p}/>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default EmployeeAccount;