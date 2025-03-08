import React from 'react'
import { Link } from 'react-router-dom'
import WordMark from './imgs/WPTI_Wordmark_White.png'
import PDF from './etc/aftercare.pdf'
function Footer() {


  return (
    <div className='footer-container border-top '>
        <div className='container '>
            <div className='row '>
                <div className='col-12 col-lg-4 pb-3'>
                    <img src={WordMark} className='img img-fluid '></img>
                    <div className='text-center'>
                    <Link className='link-light mx-2 text-decoration-none' to='/galleries'><u>Galleries</u> </Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/contact'><u>Contact</u></Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/faq'><u>FAQ</u></Link>
                    <Link className='link-light mx-2 text-decoration-none' to='/ourstory'><u>Our Story</u></Link>
                    <Link className='link-light mx-2 text-decoration-none'  to={PDF} target='_blank'><u>Aftercare</u> </Link>
                    <Link className='link-light mx-2 text-decoration-none'  to='/privacy'><u>Privacy</u>
                    </Link>
                    <Link className='link-light mx-2 text-decoration-none'  to='/terms-conditions'><u>Terms & Conditions</u>
                    </Link>
                    </div>
                    <p className=' text-center text-secondary my-1'>White Pine Tattoo © 2023</p>
                </div>
                <div className='col-12 col-lg-4 offset-0 offset-lg-1 py-3 d-flex align-items-center justify-content-center justify-content-lg-start'>
                    <div className='row '>
                    <div className='d-flex justify-content-center align-items-center justify-content-lg-start text-light mb-1'>
                        <i class="fa-md pt-3 pb-3 me-3 footer-icon fa-brands fa-instagram"></i>
                        <Link to='https://www.instagram.com/whitepinetattoos/' target='_blank' className='text-light'>@whitepinetattoos</Link>
                        </div>
                        <div className='d-flex justify-content-center align-items-center justify-content-lg-start text-light mb-1'>
                        <i class="fa-md pt-3 pb-3 me-3 footer-icon fa-sharp fa-solid fa-location-dot"></i>264 First St #2, Midland, ON
                        </div>
                        <div className='d-flex justify-content-center align-items-center justify-content-lg-start text-light mb-1'>
                        <i class="fa-md pt-3 pb-3 me-3 footer-icon fa-solid fa-envelope"></i>whitepinetattoos@gmail.com
                        </div>
                        
                    </div>
                </div>  
                <div className='col-12 col-lg-3 py-3 d-flex align-items-center'>
                <p className='text-light container text-center text-lg-start '>White Pine Tattoo, the 5-star rated tattoo shop in Midland, ON. Book your consultation today and let us make your tattoo dreams a reality.</p>    
                </div>
            </div>
            <div className='my-2 footer-creator-text'>
                <p className='text-light text-center '>Created by <a target='_blank' className='link-success text-decoration-none' href='https://syrussamson.ca'>syrussamson.ca</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer