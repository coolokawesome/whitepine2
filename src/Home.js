import {React} from 'react'
import Splash from './Splash'
import MeetTheArtists from './MeetTheArtists'
import ContactHome from './ContactHome'
import FAQHome from './FAQHome'
import Location from './Location'
import Footer

from './Footer'
import MissionStatement from './MissionStatement'
function Home() {
  return (
    <>
    <Splash />
    <MeetTheArtists />
    <MissionStatement />
    <ContactHome />
    <FAQHome />
    <Location />
    <Footer />
    </>
  )
}

export default Home