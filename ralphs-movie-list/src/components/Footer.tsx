import React from "react";

function Footer () {
    return (
        <div className="component footer-component">
            <footer className="copywrite">
                © {new Date().getFullYear()} Kevin Parkinson | Peak Self Living Inc.
            </footer>
        </div>
    );
}

export default Footer;