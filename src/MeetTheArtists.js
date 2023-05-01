import React from 'react'
import Anne1 from './imgs/anne/anne1.jpg'
import Anne2 from './imgs/anne/anne2.png'
import Anne3 from './imgs/anne/anne3.jpg'

function MeetTheArtists() {
  return (
    <div className='artists-container bg-dark text-light'>
        <div className='container'>
            <h2 className='text-center display-3'>Meet the Artists</h2>
            <div className='row d-flex align-content-center flex-wrap'>
            <div class="col-12 col-md-6">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Anne1} class="d-block h-50 img mx-auto"/>
                        </div>
                        <div class="carousel-item">
                            <img src={Anne2} class="d-block h-50 img mx-auto"/>
                        </div>
                        <div class="carousel-item">
                            <img src={Anne3} class="d-block h-50 img mx-auto"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <h3 class="text-light text-center text-md-start display-5 ">Anna</h3>
                    <p>Anna has been tattooing since she was young, starting in 2007. She holds honours certified in medical aesthetics and understands skin inside out. Her favourite things to do are illustrative realism animals, florals and portraits and ornamental designs in large scale. Scroll down to view some examples of her work. Her hobbies and past times include raising her twins, drawing, campfires, fishing, camping, boating.</p>
                    <div className='socials-container'>
                        <a  className='social-link'><i class="fa-xl fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTheArtists