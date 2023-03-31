import React from 'react'
import pic4 from "./signup.png";

function SignUp() {
  return (
    <>
      <div className='log-in'>
        <div className='Headings'>
          Sign up
        </div>
        <div className="mb-3 row logrows">
          <label for="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext spaces" id="staticEmail" />
          </div>
        </div>

        <div className="mb-3 row logrows">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext spaces" id="staticEmail" />
          </div>
        </div>

        <div className="mb-3 row logrows">
          <label for="inputPassword" className="col-sm-2 col-form-label pass">Create Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control spaces" id="inputPassword" />
          </div>
        </div>

        <div className="mb-3 row logrows">
          <label for="inputPassword" className="col-sm-2 col-form-label pass">Confirm Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control spaces" id="inputPassword" />
          </div>
        </div>

        <div class="col-auto">
        <button type="submit" class="btn btn-primary btn-lg logbutton">Sign Up</button>
        </div>
      </div>
      <img src={pic4} className="pic4" />
      <div className='onemillion'>
        Sign up to get 1 Million INR trading balance!
        Follow the registration steps to redeem your rewards and start your financial journey with us.
      </div>
      <img src="https://blog.darwinbox.com/hubfs/Blog%20Image-2.png" className='SignUpImg2'/>
    </>
  )
}

export default SignUp
