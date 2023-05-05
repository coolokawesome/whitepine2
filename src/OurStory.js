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
                    <p className='text-light'>
                        Anna Shepherd is one of the resident tattoo artists at the shop, with over 14 years of
                        experience in the industry. Anna began tattooing at a young age, and has since honed her skills
                        to become a master at illustrative realism animals, florals, and portraits, as well as
                        ornamental designs in large scale. Her deep understanding of the skin and medical aesthetics, in
                        addition to her artistic abilities, make her one of the most sought-after tattoo artists in the
                        area. When Anna is not in the shop creating beautiful works of art, she loves to spend time
                        raising her twins, drawing, camping, fishing, and boating.
                    </p>
                    <p className='text-light'>
                        Jeff Shepherd, originally an illustrator of fine-line black ink illustrations, brings a unique
                        artistic style to the tattoo shop. Jeff has been exploring different mediums such as gouache,
                        acrylics, oil paints, and large scale abstract mixed media. With just over a year of experience
                        in tattooing, Jeff has trained under Anna and specializes in illustrative blackwork and smooth
                        soft shaded black and grey medium-sized pieces. When Jeff is not tattooing, he enjoys spending
                        time with his kids and family, attending concerts, and indulging in video games and anime.
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