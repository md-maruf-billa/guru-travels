import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './home.css'
import Nav from './components/nav/Nav';

const Home = () => {
    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        const nextClickHandler = () => {
            const items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        };

        const prevClickHandler = () => {
            const items = document.querySelectorAll('.item');
            const slide = document.querySelector('.slide');
            slide.prepend(items[items.length - 1]);
        };

        next.addEventListener('click', nextClickHandler);
        prev.addEventListener('click', prevClickHandler);

        // Cleanup
        return () => {
            next.removeEventListener('click', nextClickHandler);
            prev.removeEventListener('click', prevClickHandler);
        };
    }, []);
    return (
        <div className='font-pfont'> 
            <div className="slide-container container min-h-[100vh]">
                <div className='z-[1000] sticky bg-[#35353546]'><Nav></Nav></div>
                <div className="slide">
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}>
                        <div className="content">
                            <div className="name">Switzerland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}>
                        <div className="content">
                            <div className="name">Finland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}>
                        <div className="content">
                            <div className="name">Iceland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}>
                        <div className="content">
                            <div className="name">Australia</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}>
                        <div className="content">
                            <div className="name">Netherland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)' }}>
                        <div className="content">
                            <div className="name">Ireland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.postimg.cc/RFfBhxPZ/Rectangle-1.png)' }}>
                        <div className="content">
                            <div className="name">Cox's bazar</div>
                            <div className="des">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.postimg.cc/fR6qLt1Y/Sreemongol.png)' }}>
                        <div className="content">
                            <div className="name">Ireland</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                            <button className='btn bg-[#F9A51A]'>Booking Now <FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="prev flex justify-center items-center"><FaArrowLeft /></button>
                    <button className="next flex justify-center items-center"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
