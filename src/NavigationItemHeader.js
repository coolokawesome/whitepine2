import React from 'react'

function NavigationItemHeader(props) {
  return (
    <div className='navigation-item-header-container border-bottom d-flex justify-content-center align-items-center' style={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
        <div className={null}>
        <h4 className='display-5 text-light'>{props.name}</h4>
        </div>
    </div>
  )
}

export default NavigationItemHeader