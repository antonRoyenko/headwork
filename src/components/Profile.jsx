import React from 'react';

export const Profile = () => (
    <div className="container">
        <div className="profile">
            <div className="photo">
                <img src="/img/my-photo.jpg" alt=""/>
            </div>
            <div className="about">
                <h1>Royenko Anton</h1>
                <div>
                    <p>Front-end developer</p>
                    <p className="bold">experience:</p>
                    <p>March 2018 - Present in molfar.io</p>
                    <p>October 2017 - march 2018</p>
                    <ul>
                        <li>HTML, CSS, Bootstrap, Sass, Canvas</li>
                        <li>JavaScript, Jquery, Linux, React, Redux</li>
                        <li>Linux, Git</li>
                        <li>WordPress, Prestashop, Modx, OpenCart</li>
                    </ul>
                    <p className="bold">Education:</p>
                    <p>Oles Honchar Dnipro National University, Department of Physics, Electronics and Computer Systems, specialty Computer Engineering.</p>
                    <p className="bold">Languages:</p>
                    <ul>
                        <li>English (intermediate)</li>
                        <li>Russian</li>
                        <li>Ukrainian</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
