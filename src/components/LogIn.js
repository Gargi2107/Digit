import React from 'react'
// import pic6 from './Review.jpg'
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className='loginwhole'>
      <div className='log-in'>
        <div className='Headings'>
          Log In
        </div>
        <div className="mb-3 row logrows">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext spaces" id="staticEmail" />
          </div>
        </div>
        <div className="mb-3 row logrows">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control spaces" id="inputPassword" />
          </div>

        </div>
        <div class="col-auto">
        <button type="submit" class="btn btn-primary btn-lg logbutton">Log In</button>
        </div>
        <br />
        <a href='/' className='forgot'>Forgot Password?</a>
        <br /><br /><br />
        <div className='dont'>
          Don't have an account?
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </div>
      <img src='https://st.depositphotos.com/1158045/3086/i/600/depositphotos_30861977-stock-photo-welcome-in-the-team.jpg' className='LogInImg' />
      <img src='https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&w=1000&q=80' className='LogInImg2'/>
    </div>
  )
}

export default LogIn
