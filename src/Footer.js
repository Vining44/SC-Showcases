import React from "react";
import SCLogo from './sc-logo.svg';

const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="connect">
                    <a className="connect-one" href="https://linktr.ee/SCMENSBALL">Connect</a>
                </div>
                <div className="sclogo">
                    <img src={SCLogo} />
                </div>
                <div className="contact">
                    <a className="contact-one" href="./Contact">Contact</a>
                </div>
            </div>    
        </>
    );
};

export default Footer;