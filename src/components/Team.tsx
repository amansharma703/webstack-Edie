import React from "react";

export const Team = () => {
    return (
        <section className='team'>
            <div className='container small'>
                <div className='team-flex'>
                    <div className='team-left'>
                        <div className='team-sub'>Meet the team</div>
                        <h1 className='heading'>We are chilled and a laidback team</h1>
                        <p className='team-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='team-right'>
                        <div className='image-flex'>
                            <img src='person3.png' alt='pic' className='team-big' />
                            <div className='two'>
                                <img src='person1.png' alt='pic' className='team-small' />
                                <img src='person2.png' alt='pic' className='team-mid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};