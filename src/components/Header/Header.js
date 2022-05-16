import BrainFlixLogo from "../../assets/logos/BrainFlix-logo.svg";
import MagnifyingGlassIcon from "../../assets/icons/search.svg";
import MohanMurugeAvatar from "../../assets/images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/icons/upload.svg";
import "../Header/Header.scss";

function Header() {
    return (
        <header className="header">
            <article className="header__flexbox1">
                <section className="flexbox1__logo-container">
                    <img
                    className="flexbox1__logo"
                    src={BrainFlixLogo}
                    alt="BrainFlix Logo"
                    />
                </section>
            </article>

            <article className="header__flexbox2">
                <div className="flexbox2__container1">
                    <div className="container1__image-container">
                        <img
                            className="container1__image"
                            src={MagnifyingGlassIcon}
                            alt="Magnifying Glass Icon"
                        />
                    </div>

                    <input
                        className="container1__search-bar"
                        type="text"
                        name="comment-form__name"
                        id="comment-form__name"
                        placeholder="Search"
                    ></input>
                </div>

                <div className="flexbox2__container2">
                    <img
                        className="container2__image"
                        src={MohanMurugeAvatar}
                        alt="Mohan-muruge Avatar"
                    />
                </div>
            </article>

            <article className="header__flexbox3">
                <button className="flexbox3__button">
                    <section className="button__image-container">
                        <img
                            className="button__image"
                            src={UploadIcon}
                            alt="Upload Icon"
                        />
                    </section>
                    
                    <section className="button__text-container">
                        <p className="button__text">
                            UPLOAD
                        </p>
                    </section>
                </button>
            </article>
        </header>
    )
}

export default Header