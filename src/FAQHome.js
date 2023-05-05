import React from 'react'
import { Link } from 'react-router-dom'
import PDF from './etc/aftercare.pdf'


function FAQHome() {
  return (
    <div className='faq-container'>
        <div className='container'>
            <div>
              <h3 className='display-4 text-light text-center my-4'>See our aftercare instructions & more</h3>
            </div>
            <div className='d-flex justify-content-center'>
              <Link target='_blank' to={PDF}>
                <button className='rounded-pill btn-faq'>Visit</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default FAQHome