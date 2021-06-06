import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/lg-view.css';
import '../assets/css/med-view.css';
import '../assets/css/overrides.css';

const Navbar = () => {
return (
    <nav className="navbar">
                <div className="nav-items">
                    <h4><a href="index.html">HOME</a></h4>
                </div>
                |
                <div className="nav-items">
                    <h4><a href="#">ENGAGE</a></h4>
                </div>
                |
                <div className="nav-items">
                    <h4><a href="#">NEWSLETTER</a></h4>
                </div>
            </nav>
);
}

export default Navbar;