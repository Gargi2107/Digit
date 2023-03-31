import React from 'react'
import { Link } from 'react-router-dom';
import { getAuth,signOut } from 'firebase/auth';
import { auth } from '../firebase';

const signout = () =>{
auth.signOut();  
}
function Home(props) {
  return (
    <div>
      <div className='Headings welcome'>{props.name ? `Welcome  ${props.name} !` : "Login please !!"}</div>
      <button onClick={signout()} className='logout'> Log Out</button>
      <div className='Img'>
        <img src="https://www.inveslo.com/uploads/understand-stocks-market-trading-and-its-benefits.webp" className="img-fluid" alt='Image1' />
      </div>
      <div className='head1'>Everyday Finance in one Place</div>
      <div className="card-group">
        
        <Link to='/stocks' className="card">
          <img src="https://g.foolcdn.com/editorial/images/725500/stock-chart-crash-correction-plunge-bounce-bear-market-bar-trend-invest-crypto-getty.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stocks</h5>
            <p className="card-text">Facilitating trade on equities, commodities & currencies with ease.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </Link>
        <Link to='/bonds' className="card">
          <img src="https://media.istockphoto.com/id/957360650/vector/income-increase-strategy-financial-high-return-on-investment-fund-raising-and-revenue-growth.jpg?s=612x612&w=0&k=20&c=jZt1Kl9OhFH1lQNRQl5JiF_F_DbgIhiUH-n-G1lwems=" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bonds</h5>
            <p className="card-text">Enhance returns and lower down risk by investing in various debt instruments.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </Link>
        <Link to='/mutualfunds' className="card">
          <img src="https://images.indianexpress.com/2023/03/Mutual-funds-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mutual Funds</h5>
            <p className="card-text">Buy and sell all kinds of mutual funds at one place.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
