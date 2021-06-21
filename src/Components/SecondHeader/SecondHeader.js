import React from 'react';
import Header from '../Header/Header';
import "./SecondHeader.css";

const SecondHeader = () => {
    return (
        <div style={{ backgroundColor: '#945158', height: '450px', width: '100%' }} className='background'>
            <Header></Header>

            <h1 style={{ fontFamily: 'monospace', fontWeight: '800' }} className='text-center  pt-5'>Welcome to our new website <br></br> Find Your Job From Here!!!</h1>

            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search">Search</i>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default SecondHeader;