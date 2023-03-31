import React from 'react'

function Dashboard(props) {
  return (
    <>
    <div className='dash1'>
      <div className='Headings'>
        Dashboard
      </div>
      <div className='info'>
        Name:{props.name ? `${props.name}` : " -"}
        <br/> <br/>
        E-mail: {props.email ? `${props.name}` : " -"}
        <br/> <br/>
        Money: {props.name ? `1 Million rupees only` : " -"}
      </div>
    </div>
    <img src='https://smartbrokersolutions.com/wp-content/uploads/2022/08/webtrader-solution-1024x799.jpg' className='dashimg'/>

    </>
  )
}

export default Dashboard
