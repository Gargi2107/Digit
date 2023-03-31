import React, { Component } from 'react'
import pic3 from "./MissonVision.png";
export default function About() {
    return (
        <>
            <div className='AboutWhole'>
                <div className='about'>
                    <div className='Headings'>
                        About Us
                    </div>
                    <br />
                    <div className='AboutContent'>
                        Digit brokers, incorporated in 1992, is a financial institution which finds its legacy in solving financial problems and bridging gaps for individuals, institutions and governments.
                     
                        For past 20 years we are committed to help our clients achieve their financial aspirations and promote value creation for society.

                        We have improved customer commitment and experience through utilization of innovation to every one of our administrations, including the dispatch of our versatile application for broking administrations in the year 2011, KYC confirmation and finish customer on-boarding through the electronic and computerized medium in the year 2015 and 2016, individually.
                    </div>
                </div>
                <img src="https://img.etimg.com/photo/msid-64916939/images-5.jpg" className='AboutImg' />
            </div>

            <div className='About3Whole'>
                <div className='about3'>
                    <div className='Headings'>
                        Board Of Directors
                    </div>
                    <br />
                    <div className='About3Content'>
                        Mrs. Sunita Nigam
                        <br /><br />
                        Mr. Santosh Nigam 
                        <br /><br />  
                        Mrs. Dipali Besra
                        <br /><br />                                               
                        Mr. Chandra Mohan Besra
                    </div>
                </div>
                <img src="https://www.docsend.com/wp-content/uploads/2019/12/board-management-101-scaled.jpg" className='About3Img' />
            </div>
            {/* 
            <div id="carouselExampleInterval" class="carousel slide directorwhole" data-bs-ride="carousel">
                <p className='directorhead'>Board Of Directors</p>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://cdn-icons-png.flaticon.com/512/1753/1753732.png" class="d-block w-90 director" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://img.etimg.com/photo/msid-64916939/images-5.jpg" class="d-block w-90 director" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.etimg.com/photo/msid-64916939/images-5.jpg" class="d-block w-90 director" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}

            <div className="About2whole">
                <div className='about2'>
                    <div className='Headings'>
                        Our Mission and Vision
                    </div>
                    <br />
                    <div className='About2Content'>
                        Our mission is to consistently become better at what we do by serving our clients, shareholders and society with ideas and products to promote financial growth for everyone and contributing to a sustainable future.
                        <br /><br />
                        Our vision is to empower our clients financially by delivering innovation and prosperity through our offerings. We aim to keep moving forward with a blend of conventional wisdom and new ideas.
                        <br /><br />
                    </div>
                </div>
                <img src={pic3} className="pic3" />
            </div>

        </>
    )
}