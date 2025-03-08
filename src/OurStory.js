import React from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'
import ContactHome from './ContactHome'
import { Link } from 'react-router-dom'
import img from './imgs/0.jpg'
function OurStory() {
  return (
    <>
    <NavigationItemHeader img={NavigationHeaderImg} name={'Our Story'} />
    <section class="our-story">
        <div class="container mt-4 mb-3">
            <div class="row d-flex align-items-center">
                <div class="col-12 col-md-6">
                    <p className='text-light'>
                        Anna and Jeff Shepherd are the happily married couple who founded our friendly, atmospheric
                        tattoo shop located in the charming town of Tiny, Ontario. They have followed their dreams of
                        creating a community hub for tattoo enthusiasts, where clients can relax and connect with others
                        who share their love of tattoos.
                    </p>
                    <br />
                    <p className='text-light'>
                    Anna has been a tattoo artist of 17+ years in the industry. She has done conventions in Toronto, worked alongside with many award-winning artists and beautiful shops. 
                    <br />
                    Along the way; she has taken what she has loved, and also learned that some things are best left in the past in terms of tattooing.
                    <br />
                    Anna’s work differs as every year offers growth and evolution, and is pleased to offer to do a bit of every style of tattooing depending on the subject matter. 
                    Her preference is black and grey, floral; illustrative and traditional color tattoos. 
                    <br />
                    Anna offers a spiritual approach to tattooing and encourages a relaxing experience with getting tattooed, and encourages it to be “therapeutic discomfort” as coined by her friend and manager. 
                    <br />
                    Tattoos are ceremonial and they should be honoured in your skin in a collaborative and interactive effort from both of us. As an artist first, I work specializing in large-scale to ensure the preliminary design is perfect and suited to your body. 
                    <br />
                    Feel free to let Anna guide you through this very personal individual tattoo experience and ensure you are as comfortable as possible. 
                    </p>
                    <br />
                    <p className='text-light' style={{initialLetter: '5em'}}>
                    Jeff has been an artist his entire life, but has honed and sharped his skills in drawing, illustrating and is now pushing tattooing to a new style and bringing a new feeling to the local tattoo scene. 
                    <br />
                    Jeff’s strengths include illustrative, loose interpretation, black and grey, sometimes mixing one other color (monochromatic) for added effect. 
                    <br />
                    Jeff has a gentle touch with tattooing, while also making bold choices with his artistic interpretation. He has a profound love for animals, especially dogs. 
                    <br />
                    Jeff loves camping; the outdoors and spending time his family. In the summer he enjoys being out on the water and the beach with his kids and their senior dog Leon. 
                    </p>
                    <div class="mb-3">
                        <Link class="a-link" to="/galleries">VIEW THE GALLERIES {'>'}</Link>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-2 img-fluid img story-img-frame">
                    
                    <img className="story-img img border" src={img} loading="lazy"/>
      
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )}
export default OurStory