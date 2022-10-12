import React from 'react';
import errorPhoto from '../../notefound.jpg'

const ErrorPage = () => {
    return (
        <div className='mx-5 lg:ml-48 font-bold text-xl lg:text-3xl text-pink-600 my-20'>
            <img className='w-60' src={errorPhoto} alt="" />
            <h2>Page not found.</h2>
            <p>Please check the link you intered.</p>
        </div>
    );
};

export default ErrorPage;