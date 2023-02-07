import React from "react"

export default function Info () {
    return (
        <div className="info-container">
            <img src="./Photos/me.jpg" />
            <h3>Darrick Ingersoll</h3>
            <h6>Front End Developer</h6>
            <h6>Branding Designer</h6>
            <p>personal website</p>
            <div className="button-container">
                <a href="Darrick.Ingersoll147@gmail.com" className="email-link">
                    <button className="email">
                        <span className="email-button">
                            <img className="email-icon" src="./Photos/Mail.svg"></img>
                        </span>
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/darrick-ingersoll/" className="li-link">
                    <button className="linkedin">
                        <span className="linkedin-button">
                            <img className="linkedin-small" src="./Photos/linkedin.svg"></img>
                        </span>
                        Linkedin
                    </button>
                </a>
            </div>
        </div>
    )
}