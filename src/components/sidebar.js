import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/lg-view.css';
import '../assets/css/med-view.css';
import '../assets/css/overrides.css';

export const SideBar = (props) => {
    return (
<div className="card">
                    <h3>Recommended posts</h3>
                    <ul id="side">
                        <li>consectetur adipiscing elit, sed do eiusmod</li>
                        <li>psum dolor sit amet</li>
                        <li>labore et dolore magna aliqua</li>
                    </ul>
                    <hr />

                    <h3>Latest posts</h3>
                    <ul id="side">
                        <li>consectetur adipiscing elit</li>
                        <li>eiusmod tempor incididunt ut labore</li>
                        <li>laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Excepteur sint occaecat cupidatat non proident</li>
                        <li>consectetur adipiscing elit</li>
                        <li>tempor incididunt ut labore et dolore</li>
                    </ul>
                    <hr />

                    <h3>Categories</h3>
                    <ul>
                        <li>
                            <h4>Science</h4>
                        </li>
                        <li>
                            <h4>Sport</h4>
                        </li>
                        <li>
                            <h4>Spirituality</h4>
                        </li>
                        <li>
                            <h4>Health & well being</h4>
                        </li>
                        <li>
                            <h4>Entertainment</h4>
                        </li>
                        <li>
                            <h4>Technology</h4>
                        </li>
                        <li>
                            <h4>Weather</h4>
                        </li>
                        <li>
                            <h4>Kids</h4>
                        </li>
                    </ul>
                    <hr />

                    <h3>Subscribe to our newsletter</h3>
                    <div className="subscribe">
                        <form action="post">
                            <label>Name</label>
                            <input type="text" maxLength="50" />
                            <label>Email Address</label>
                            <input type="email" />
                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>

    );
} ;
