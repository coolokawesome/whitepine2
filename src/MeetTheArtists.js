import React from 'react'
import Anne1 from './imgs/anne/anne1.jpg'
import Jeff1 from './imgs/jeff/jeff3.png'

function MeetTheArtists() {
  return (
    <div className='artists-container bg-dark text-light'>
        <div className='container'>
            <h2 className='text-center display-3 border-bottom'>Meet the Artists</h2>
            <div className='row d-flex align-content-center flex-wrap my-5'>
                <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end pe-0 pe-lg-5">
                    <div className='p-2 img-frame'>
                    <img src={Anne1} className=' meet-the-artists-img img img-fluid'></img>
                    </div>
                </div>
                <div className='col-12 col-lg-6 d-flex align-items-center'>
                    <div className=''>
                    <div>
                    <h3 class="text-light text-center text-lg-start display-5 ">Anna</h3>
                    <p className='text py-2'>
                        Anna has been tattooing since she was young, starting in 2007. She holds honours certified in medical aesthetics and understands skin inside out. Her favourite things to do are illustrative realism animals, florals and portraits and ornamental designs in large scale. 
                    </p>
                    <p className='text py-2'> 
                        Her hobbies and past times include raising her twins, drawing, campfires, fishing, camping and boating. Anna is passionate about creating art that celebrates nature and the world we live in, and this passion is evident in all of her work.</p>
                    <div className='socials-container d-flex justify-content-center justify-content-lg-start'>
                        <a  className='me-2 social-link'><i class="fa-xl fa-brands fa-instagram"></i></a>
                        <a className='mx-2 a-link'><b>SEE PORTFOLIO {'>'}</b></a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex align-content-center flex-wrap my-5'>
                <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start order-first order-lg-last ps-0 ps-lg-5">
                <div className='p-2 img-frame'>
                    <img src={Jeff1} className=' meet-the-artists-img img img-fluid'></img>
                    </div>
                </div>
                <div className='col-12 col-lg-6 d-flex align-items-center'>
                    <div className=''>
                    <div>
                    <h3 class="text-light text-center text-lg-end display-5 ">Jeff</h3>
                    <p className='text text-center text-lg-end py-2'>
                    Jeff is a skilled illustrator known for his fine-line black ink drawings. His larger pieces could take up to two weeks to complete due to the meticulous attention to detail that he puts into each piece. In recent years, Jeff has been exploring different mediums like gouache, acrylics, and oil paints. He has also ventured into large scale abstract mixed media, demonstrating his versatility as an artist.
                    </p>
                    <p className='text text-center text-lg-end py-2'> 
                    Aside from his passion for art, Jeff also has a keen interest in tattooing. He has been practicing for just over a year and was trained under Anna, a seasoned tattoo artist. Jeff specializes in illustrative blackwork and creates smooth, soft-shaded black and grey medium-sized tattoos. When he is not creating art, Jeff enjoys spending time with his family, attending concerts, playing video games, and watching anime.</p>
                        <div className='socials-container d-flex justify-content-center justify-content-lg-end'>
                        <a  className='me-2 social-link'><i class="fa-xl fa-brands fa-instagram"></i></a>
                        <a className='mx-2 a-link'><b>SEE PORTFOLIO {'>'}</b></a>
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