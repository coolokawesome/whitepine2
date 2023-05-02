import React from 'react'
import { Link } from 'react-router-dom'
import WordMark from './imgs/WPTI_Wordmark_White.png'
function Footer() {


  return (
    <div className='footer-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-4'>
                    <img src={WordMark} className='img img-fluid'></img>
                    <p className='text-light'>Discover White Pine Tattoo, the 5-star rated tattoo shop in Midland, ON. We take pride in creating unforgettable, one-of-a-kind pieces for our clients. Book your consultation today and let us make your tattoo dreams a reality.</p>
                </div>
                <div className='col-12 col-lg-4'>
                    <h5 className='text-light mt-3'>Links</h5>
                    <Link className='link-light mx-2' to='/galleries'>Galleries</Link>
                <Link className='link-light  mx-2' to='/artists'>Artists</Link>
                <Link className='link-light mx-2' to='/contact'>Contact</Link>
                <Link className='link-light mx-2' to='/faq'>FAQ</Link>
                <Link className='link-light mx-2' to='/ourstory'>Our Story</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer