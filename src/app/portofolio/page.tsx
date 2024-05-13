import Head from "next/head"
import React from 'react'
import type { Metadata } from "next";
import Link from 'next/link'
// import "../globals.css";
import "../style.css";
import Image from 'next/image'

export const metadata: Metadata = {
    title: "Portofolio Aditya Pradana",
    description: "Portfolio Aditya Pradana",
};

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
                                    <h2>Front End Developer</h2><span className="typed-cursor">|</span>
                                    <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
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
        </div>
    )
}

export default Portofolio