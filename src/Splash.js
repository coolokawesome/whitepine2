import {React} from 'react'
import { Link } from 'react-router-dom'
import Logo from './imgs/logo1.png'
import Background from './imgs/backgroundImg.avif'
function Splash() {
  return (
    <div id='splash' className='container landing-container d-flex align-content-around flex-wrap'>
      <img src={Background} className='background'></img>
      <div className='row d-flex justify-content-center'>
        <img src={Logo} className='col-8 col-xl-8'></img>
      </div>
      <div className='container mb-5 pb-5'>
        <div className='row '>
          <div className='d-flex justify-content-center'>
            <Link to='/contact'>
              <button class="btn btn-lg btn-primary m-2 rounded-2 ps-4 pe-4">Contact Us</button>
            </Link>
            <Link to='./galleries'>
              <button class="btn btn-lg btn-secondary m-2 rounded-2">View Galleries</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash