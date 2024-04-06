import React from 'react';
import Nav from '../home/components/nav/Nav';

const Contacts = () => {
    return (
        <div className='min-h-screen bg-no-repeat bg-cover bg-[linear-gradient(180deg,rgba(0,0,0,0.20),#000000B2),url(https://i.ibb.co/jTQfmTq/img5.jpg)]'>
            <div className='bg-[#00000036]'>
                <Nav></Nav>
            </div>
            <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-4xl font-bold font-pfont text-white'>This is Contact page</h1>
            </div>

        </div>
    );
};

export default Contacts;