import React from "react";

export const Work = () => {
    return (
        <section className='our-work' id='our-works'>
            <div className='container small'>
                <h1 className='heading wide'>Good design means good business</h1>
                <div className='works-flex'>
                    <div className='left'>
                        <img src='smarthome.jpg' alt='pic' className='work-img' />
                        <p className='work-desc'>Full stack application</p>
                        <h2 className='work-name'>Smart home dashboard</h2>
                    </div>
                    <div className='right'>
                        <img src='onboard.png' alt='pic' className='work-img' />
                        <p className='work-desc'>UX/UI Design</p>
                        <h2 className='work-name'>Onboard application</h2>
                    </div>
                </div>
                <div className='works-flex'>
                    <div className='left'>
                        <img src='booking.png' alt='pic' className='work-img' />
                        <p className='work-desc'>Mobile application</p>
                        <h2 className='work-name'>Booking system</h2>
                    </div>
                    <div className='right'>
                        <img src='juice-product.png' alt='pic' className='work-img' />
                        <p className='work-desc'>Front End Design</p>
                        <h2 className='work-name'>Juice product homepage</h2>
                        <button className='btn-more'>
                            see more
                            <i className='fas fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
