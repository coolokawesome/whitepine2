import React, {useState, useEffect} from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'
import {Jeff, Anna, All} from './objects'


function Galleries() {

  const [selected, setSelected] = useState('All')
  const [imgs, setImgs] = useState([])

  const handleSelected = (e) => {
    setSelected(e.target.value)
  }
  useEffect(() => {
    
    let newArray = []
    if(selected == 'Anna') {
      Anna.forEach((img) => {
        newArray.push(img)
      })
      setImgs(newArray)
    }
    if(selected == 'Jeff') {
      Jeff.forEach((img) => {
        newArray.push(img)
      })
      setImgs(newArray)
    }
    if(selected == 'All') {
      All.forEach((img) => {
        newArray.push(img)
      })
      setImgs(newArray)
    }
  }, [selected])

  return (
    <>
    <NavigationItemHeader img={NavigationHeaderImg} name={'Galleries'} />
    <div className='container'>
    <div className='row d-flex align-items-center mt-3'>
      <div className='col-4'>

      </div>
      <div className='col-4'>
      <div className='d-flex justify-content-center align-items-center'>
        <h5 className='text-light display-6'>{selected}</h5>
    </div>
      </div>
    <div className='col-4 d-flex justify-content-end'>
      <p className='text-light me-2'> Artist:</p>
      <select class='artist-selection' onChange={handleSelected} value={selected} name="gallery" id="gallery">
        <option value="Anna">Anna</option>
        <option value="Jeff">Jeff</option>
        <option value="All" defaultValue={'All'}>All</option>
      </select>
    </div>
    </div>
    </div>
    <div className='gallery-container container'>
      <div className='row my-4'>
        {
          imgs.map((img, index) => (
            <div key={index} className='col-6 col-md-4 col-lg-3 gallery-img-container my-2'  >
                <img className='img img-fluid gallery-img' src={require(`${img}`)} style={{ animationDelay:`${index * 0.1}s`}} ></img>
            </div>
          ))
        }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Galleries