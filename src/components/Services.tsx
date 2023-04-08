import React from "react";
import { cardName } from "../constant";

export const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container small">
                <h1 className="heading">We offer high demand services</h1>
                <div className="cards">
                    {cardName.map((card, index) => (
                        <div className="card" key={index}>
                            <i
                                className={card.icon}
                                style={{
                                    color: card.color,
                                    fontSize: index !== 1 ? "32px" : "18px",
                                    padding: index === 1 ? "12px" : "0px",
                                    marginBottom : index===1 ? "18px" : "35px",
                                }}
                            ></i>
                            <h3 className="card-heading">{card.name}</h3>
                            <p className="card-desc">{card.desc}</p>
                            <button className="card-btn">Get started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
