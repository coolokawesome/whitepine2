import React from 'react'
import shop1 from './imgs/shop1.jpg'
import shop2 from './imgs/shop2.jpg'
import shop3 from './imgs/shop3.jpg'
import shop4 from './imgs/shop4.png'


function MissionStatement() {
  return (
    <div style={{ minHeight: '100%', background: '#555'}}  className='bg-dark text-light'>
        <div className='container'>
            <h2 className="text-center display-3 border-bottom">Our Mission</h2>
            <div className='row'>
            <div className='row col-12 col-lg-6 d-flex align-content-center flex-wrap my-5'>
                <br />
                <p className='text py-2'>
                We provide the best quality reach compliant inks, sterile and single use disposable needles, and a clean and brightly lit environment. 
                </p>
                <p className='text py-2'>
                All bodies and walks of life are welcome at our studio. We encourage you to consult with us prior to these big commitments and see if we are the best suited artists for your expectations. 
                </p>
                <p className='text py-2'>
                We hope we can provide you with excellent client care before, during and after your tattoo with a focus on a trauma-informed approach. We understand that some of our visitors have not had good experiences in the past at other shops, so we want you to know we are committed to being open minded and friendly. We appreciate your willingness to support local, and look to give back to our community with your support. 
                </p>
                <p className='txt py-2'>
                Both Anna and Jeff are great with first timers and even smaller tattoos and groups. 
                We are also working on offering wedding tattoo packages for your guests. 
                Please inquire for packaging and prices. 
                </p>
            </div>
            <div className='row col-12 col-lg-6 d-flex align-content-center flex-wrap my-5'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={shop1} className="d-block w-100" style={{height: 700, objectFit: 'cover', width: '100%'}} alt="main shop" />
                    </div>
                    <div className="carousel-item">
                    <img src={shop2} className="d-block w-100" style={{height: 700, objectFit: 'cover', width: '100%'}} alt="" />
                    </div>
                    <div className="carousel-item">
                    <img src={shop3} className="d-block w-100" style={{height: 700, objectFit: 'cover', width: '100%'}} alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={shop4} className="d-block w-100" style={{height: 700, objectFit: 'cover', width: '100%'}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MissionStatement