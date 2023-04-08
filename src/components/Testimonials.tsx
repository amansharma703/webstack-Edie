import React from "react";

export const Testimonials = () => {
    return (
        <section className='clients' id='clients'>
            <div className='container small'>
                <h2 className='clients-text'>
                    "Fast and outstanding results. Edie understands their customer's needs. They have a young and talented team."
                </h2>
                <div className='profile'>
                    <img src='person4.png' alt='pic' className='profile-pic' />
                    <div className='profile-desc'>
                        <p className='profile-name'>Carlos Tran</p>
                        <p className='profile-job'>The Decorate Gatsby</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
