import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/lg-view.css';
import '../assets/css/med-view.css';
import '../assets/css/overrides.css';

const year = () => {
    var d = new Date();
    var n =d.getFullYear();
    return n;
}

// let Copyright = `© Copyright ${year()} Mehdi Hajidavalloo`;

const Footer = (props) => {
return(
    <footer className="footer">
                <div className="container-fluid">
                    Follow us:
                    <i className="social-icons fab fa-twitter"></i>
                    <i className="social-icons fab fa-facebook-f"></i>
                    <i className="social-icons fab fa-instagram"></i>
                    <p>© Copyright {year()} Mehdi Hajidavalloo</p>
                </div>
                <a href="#head">↑Top</a>
            </footer>
);

};

export default Footer;