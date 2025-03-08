import React from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'
import ContactHome from './ContactHome'
function Contact() {
  return (
    <>
    <NavigationItemHeader img={NavigationHeaderImg} name={'Contact Us'} />
    <div className='contact'>
        <div className='container'>
            <div className='row'>
                <div className=''>
                    <h3 className='display-4 text-light text-center my-4'>Want to schedule an appointment?</h3>
                </div>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2 mb-5 '>
                    <div className=' bg-dark p-4 rounded-3  rounded-lg-0'>
                    <form action="https://formspree.io/f/mvonqrwa" method="POST">
                        <label for='name' className='form-label text-light'>Name:</label>
                        <input class="form-control" type="name" name="name" required />
                        <label className='mt-3 form-label text-light' for='email'>Email:</label>
                        <input class="form-control" type="email" name="email"  required />
                        <label className='mt-3 form-label text-light' for='phone'>Phone Number:</label>
                        <input class="form-control" type="phone" name="phone" required />
                        <label className='mt-3 form-label text-light' for='message'>Your Message:</label>
                        <textarea class="form-control"  name="message" rows="6" minlength="50"></textarea>
                        <button class="mt-4 col-12 btn btn-submit btn-primary" type="submit">Send</button>
                    </form>
                    <h5 className='text-light text-center mt-5'>Or Contact us directly at: whitepinetattoos@gmail.com</h5>
                    </div>
                <div>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact