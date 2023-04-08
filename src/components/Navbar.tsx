import React, { useState } from "react";
import { links } from "../constant";
import { useWindowSize } from "../hooks/useWindowSize";

export const Navbar = () => {
    const [showDropDown, setShowDropDown] = useState(false);
  const { width } = useWindowSize();

    return (
        <>
            <nav
                className="nav"
                style={{
                    height: showDropDown && width<768 ? "500px" : "",
                }}
            >
                <div className="nav-container">
                    <a
                        href="#home"
                        className="logo"
                        style={{
                            display: showDropDown ? "none" : "block",
                        }}
                    >
                        Edie
                    </a>
                    <div
                        className={`mobile-nav ${showDropDown && "is-active"}`}
                        id="mobile-nav"
                        onClick={() => {
                            setShowDropDown(!showDropDown);
                        }}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul
                        className={`nav-items ${!showDropDown && "active"}`}
                        id="mobile-items"
                    >
                        {links.map((link, ind) => (
                            <li className="nav-item" key={ind} onClick={() => {
                                setShowDropDown(!showDropDown);
                            }}>
                                <a
                                    href={link.to}
                                    className="nav-link"
                                    id="home-page"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};
