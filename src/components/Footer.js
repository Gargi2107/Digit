import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// var str="     ";
function Footer() {
  return (
    <div>
      <footer class="footer1">
        <div class="container container-footer">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><a href='#'>Contact No. : +91 7355679772, +91_7978747818</a></li>
                <li><a href='#'>Email : digit.brokers@gmail.com</a></li>


                <li><a href='#'>Address : Digit Brokers Limited, Bengaluru, Karnataka 560103</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href='#'><i class="fab fa-facebook-f"></i></a>
                <a href='#'><i class="fab fa-twitter"></i></a>
                <a href='#'><i class="fab fa-instagram"></i></a>
                <a href='#'><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <a href='https://www.google.com/maps/place/Bengaluru+Palace/@12.998766,77.5876224,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1649294a5637:0xb1f8b77e331512cf!8m2!3d12.998766!4d77.5921071!16s%2Fm%2F02pf96d' className='locabox'>
              <img src='https://imageproxy-v2.services.lokalebasen.dk/full-size/lb-images-asia/in/2233878/staticmap.png' className='loca' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
