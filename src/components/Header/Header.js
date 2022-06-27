import BrainFlixLogo from "../../assets/logos/BrainFlix-logo.svg";
import MagnifyingGlassIcon from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import "../Header/Header.scss";
import { NavLink } from 'react-router-dom';
import React from "react";

function Header() {
    return (
        <header className="header">
            <article className="header__flexbox1">
                <section className="flexbox1__logo-container">
                    <NavLink to="/home" className="flexbox1__logo-link">
                        <img
                            className="flexbox1__logo"
                            src={BrainFlixLogo}
                            alt="BrainFlix Logo"
                        />
                    </NavLink>
                </section>
            </article>

            <article className="header__flexbox2">
                <section className="flexbox2__container1">
                    <section className="container1__search-bar">
                        <div className="container1__image-container">
                            <img
                                className="container1__image"
                                src={MagnifyingGlassIcon}
                                alt="Magnifying Glass Icon"
                            />
                        </div>

                        <input
                            className="container1__search"
                            type="text"
                            name="container1__search"
                            id="container1__search"
                            placeholder="Search"
                        ></input>
                    </section>

                    <section className="container1__avatar-image">
                        <img
                            className="container1__image"
                            src={"http://localhost:8080/images/Mohan-muruge.jpg"}
                            alt="Mohan-muruge Avatar"
                        />
                    </section>
                </section>

                <article className="flexbox2__container2">
                    <button className="container2__button">
                        <section className="button__image-container">
                            <img
                                className="button__image"
                                src={UploadIcon}
                                alt="Upload Icon"
                            />
                        </section>
                        
                        <NavLink to="/upload" className="container2__link">
                            <section className="button__text-container">
                                <p className="button__text">
                                    UPLOAD
                                </p>
                            </section>
                        </NavLink>
                    </button>    
                </article>
            </article>
        </header>
    )
}

export default Header