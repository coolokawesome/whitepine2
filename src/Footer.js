import React from 'react'
import { Link } from 'react-router-dom'
import WordMark from './imgs/WPTI_Wordmark_White.png'
function Footer() {


  return (
    <div className='footer-container'>
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-lg-4 pb-3'>
                    <img src={WordMark} className='img img-fluid '></img>
                    <div className='text-center'>
                    <Link className='link-light mx-2 text-decoration-none' to='/galleries'>Galleries </Link>
                    <Link className='link-light text-decoration-none mx-2' to='/artists'>Artists </Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/contact'>Contact</Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/faq'>FAQ</Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/ourstory'>Our Story</Link>
                    </div>
                    <p className=' text-center text-secondary my-1'>White Pine Tattoo © 2023</p>
                </div>
                <div className='col-12 col-lg-4 offset-0 offset-lg-1 py-3'>
                    <div className='row'>
                        <div className='col-12 text-light mb-3'>
                        <i class="fa-xl pt-3 pb-3 me-3 footer-icon fa-sharp fa-solid fa-location-dot"></i>309 King St., Midland, ON
                        </div>
                        <div className='col-12 text-light'>
                        <i class="fa-xl pt-3 pb-3 me-3 footer-icon fa-solid fa-envelope"></i>whitepinetattoos@gmail.com
                        </div>
                    </div>
                </div>  
                <div className='col-12 col-lg-3 py-3'>
                <p className='text-light'>White Pine Tattoo, the 5-star rated tattoo shop in Midland, ON. Book your consultation today and let us make your tattoo dreams a reality.</p>    
                </div>
            </div>
            <div className='my-2'>
                
                <p className='text-light text-center'> All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer