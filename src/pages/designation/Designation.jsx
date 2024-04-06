import React from 'react';
import Nav from '../home/components/nav/Nav';
const Designation = () => {
    return (
        <div className='min-h-screen bg-[linear-gradient(45deg,rgba(0,0,0,0.50),rgba(0,0,0,0.30)),url(https://i.postimg.cc/RFfBhxPZ/Rectangle-1.png)] bg-no-repeat bg-cover'>
            <div className='bg-[#00000054]'>
                <Nav></Nav>
            </div>
            {/* ---------------Designation section hare-------- */}

            <div className='text-white font-pfont md:flex gap-10 justify-center items-center md:min-h-screen px-4 lg:px-0'>
                {/* ---------content section-------- */}
                <div className='lg:w-1/2'>
                    <h3 className= 'text-6xl lg:text-8xl text-center mt-8 lg:mt-0 lg:text-left font-title'>Cox's bazar</h3>
                    <p className='lg:w-[500px] text-justify mt-4'>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                </div>


                {/* ---------form section---------- */}
                <div className='bg-white p-6 text-black rounded-lg mt-10'>
                    <h2 className='text-center font-title text-6xl'>Your Plan</h2>
                    <form >
                        <div className='flex flex-col'>
                            <label >Origin</label>
                            <input className='bg-[#F2F2F2] mt-2 px-5 py-4 rounded-lg font-semibold' type="text" placeholder='Your Location?' />
                        </div>

                        <div className='flex flex-col mt-4'>
                        <label >Designation</label>
                        <input className='bg-[#F2F2F2] mt-2 px-5 py-4 rounded-lg font-semibold' type="text" placeholder='Where You may go?' />
                        </div>


                        <div className='md:flex gap-5 mt-4'>
                            <div className='flex flex-col'>
                                <label >Form</label>
                                <input className='bg-[#F2F2F2] mt-2 px-5 py-4 rounded-lg font-semibold' type="date" name="" id="" />
                            </div>
                            <div className='flex flex-col'>
                                <label >To</label>
                                <input className='bg-[#F2F2F2] mt-2 px-5 py-4 rounded-lg font-semibold' type="date" name="" id="" />
                            </div>

                        </div>
                        <button type='submit' className='btn mt-8 w-full bg-[#F9A51A] border-none outline-none'>Start Booking</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Designation;