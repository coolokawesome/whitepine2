import React from 'react'
import Anne1 from './imgs/anne/anne1.jpg'
import Anne2 from './imgs/anne/anne2.png'
import Anne3 from './imgs/anne/anne3.jpg'

function MeetTheArtists() {
  return (
    <div className='artists-container bg-dark text-light'>
        <div className='container'>
            <h2 className='text-center display-3'>Meet the Artists</h2>
            <div className='row d-flex align-content-center flex-wrap my-5'>
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end pe-0 pe-md-5">
                    <img src={Anne1} className='meet-the-artists-img'></img>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                    <div className=''>
                    <div>
                    <h3 class="text-light text-center text-md-start display-5 ">Anna</h3>
                    <p className='text py-2'>
                        Anna has been tattooing since she was young, starting in 2007. She holds honours certified in medical aesthetics and understands skin inside out. Her favourite things to do are illustrative realism animals, florals and portraits and ornamental designs in large scale. 
                    </p>
                    <p className='text py-2'> 
                        Her hobbies and past times include raising her twins, drawing, campfires, fishing, camping and boating. Anna is passionate about creating art that celebrates nature and the world we live in, and this passion is evident in all of her work.</p>
                    <div className='socials-container d-flex justify-content-center justify-content-md-start'>
                        <a  className='me-2 social-link'><i class="fa-xl fa-brands fa-instagram"></i></a>
                        <a className='mx-2 a-link'>SEE PORTFOLIO {'>'}</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex align-content-center flex-wrap my-5'>
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start order-last ps-0 ps-md-5">
                    <img src={Anne1} className='meet-the-artists-img'></img>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                    <div className=''>
                    <div>
                    <h3 class="text-light text-center text-md-end display-5 ">Jeff</h3>
                    <p className='text text-center text-md-end'>
                        Anna has been tattooing since she was young, starting in 2007. She holds honours certified in medical aesthetics and understands skin inside out. Her favourite things to do are illustrative realism animals, florals and portraits and ornamental designs in large scale. 
                    </p>
                    <p className='text text-center text-md-end'> 
                        Her hobbies and past times include raising her twins, drawing, campfires, fishing, camping and boating. Anna is passionate about creating art that celebrates nature and the world we live in, and this passion is evident in all of her work.</p>
                    <div className='socials-container d-flex justify-content-cecnter justify-content-md-end'>
                        <a  className='social-link'><i class="fa-xl fa-brands fa-instagram"></i></a>
                        <a className='ms-2'>SEE PORTFOLIO {'>'}</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTheArtists