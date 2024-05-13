"use client";

import Head from "next/head"
import React from 'react'
import type { Metadata } from "next";
import Link from 'next/link'
// import "../globals.css";
import "../style.css";
import Image from 'next/image'
import { useState, useEffect } from 'react';


const metadata: Metadata = {
    title: "Portofolio Aditya Pradana",
    description: "Portfolio Aditya Pradana",
};

function TypedEffect() {
    const skills = ['Web Developer', 'Backend Programmer']
    const [letterPos, setLetterPos] = useState(0);
    const [skillPos, setSkillPos] = useState(0);
    let skill = skills[skillPos]
    const [text, setText] = useState(skill[0]);
    useEffect(
        function () {
            setTimeout(function () {
                setLetterPos(letterPos + 1);
            }, 250);
            if (letterPos > skill.length) {
                setLetterPos(0)
                if (skillPos + 1 <= skills.length-1) {
                    setSkillPos(skillPos + 1)
                } else {
                    setSkillPos(0)
                }
            }
            setText(skill.slice(0, letterPos))
        }
    )
    // useEffect(
    //     function () {
    //         setTimeout(function () {
    //             setCount(count + 1);
    //         }, 1000);
    //     },
    //     [count]
    // );
    return (
        <div>
            {text}
        </div>
    );
}

export function Portofolio() {
    return (
        <div>
            {/* <!-- Nav Bar Start --> */}
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">DevFolio</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <a href="#home" className="nav-item nav-link active">Home</a>
                            <a href="#about" className="nav-item nav-link">About</a>
                            <a href="#service" className="nav-item nav-link">Service</a>
                            <a href="#experience" className="nav-item nav-link">Experience</a>
                            <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                            <a href="#price" className="nav-item nav-link">Price</a>
                            <a href="#review" className="nav-item nav-link">Review</a>
                            <a href="#team" className="nav-item nav-link">Team</a>
                            <a href="#blog" className="nav-item nav-link">Blog</a>
                            <a href="#contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}
            <div className="hero" id="home">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text">
                                    <p>I'm</p>
                                    <h1>Kate Winslet</h1>
                                    <h2><TypedEffect /></h2><span className="typed-cursor">|</span>
                                    {/* <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div> */}
                                </div>
                                <div className="hero-btn">
                                    <a className="btn" href="">Hire Me</a>
                                    <a className="btn" href="">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <Image
                                    src="/img/hero.png"
                                    width={500}
                                    height={500}
                                    alt="Hero Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- JavaScript Libraries --> */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            {/* <script src="lib/typed/typed.min.js"></script> */}
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="lib/isotope/isotope.pkgd.min.js"></script>
            <script src="lib/lightbox/js/lightbox.min.js"></script>

            {/* <!-- Contact Javascript File --> */}
            <script src="mail/jqBootstrapValidation.min.js"></script>
            <script src="mail/contact.js"></script>

            {/* <!-- Template Javascript --> */}
            <script src="js/main.js"></script>
        </div>
    )
}

export default Portofolio