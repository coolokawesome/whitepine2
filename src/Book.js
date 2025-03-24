import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Book() {
  const [bookingData, setBookingData] = useState({})
  const [formState, handleFormSubmit] = useForm("mqkvogdj")
  const [currentTab, setCurrentTab] = useState(1)
    

  const onNext = (e) => {
    e.preventDefault()
    localStorage.setItem('whitepine-current-tab', JSON.stringify(currentTab + 1))
    setCurrentTab(currentTab + 1)
  }

  // useEffect(() => {
  //   const getLastTab = localStorage.getItem('whitepine-current-tab') || "1"
  //   setCurrentTab(JSON.parse(getLastTab))
  // }, [])
  
  if (formState.succeeded) {
    return <p>Thanks for your email! We will get back to you shortly.</p>;
}

  return (
    <div style={{color: 'white'}}>
      <form method="POST" action="https://formsubmit.co/183ba4d2eeff7f4a7f046f93495c1962" encType="multipart/form-data">

      <div style={{display: currentTab === 1 ? "block" : "none"}}>
       <fieldset>
        <legend>Does your tattoo idea include roman numerals or numbers?</legend>
        <label>Yes:</label> <input id="yes" type="radio" name="Includes Roman Numerals or script"  value="yes" />
        <label>No:</label> <input id="no" type="radio"  name="Includes Roman Numerals or script" value="no" />
       </fieldset>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>
    
      <div style={{display: currentTab === 2 ? "block" : "none"}}>
        <h2>Your Idea</h2>
        <p>To make sure that the tattoo fits you perfectly, I need at least a rough direction in which it should go and what you are envisioning- make sure to note specifics ( eg: if you are getting two hands ; what word / phrase goes on which hand or if it is solely up to me to decide )- The more specific you can describe it, the better.Please describe your idea. To make sure that the tattoo fits you perfectly, I need at least a rough direction in which it should go and what you are envisioning- make sure to note specifics ( eg: if you are getting two hands ; what word / phrase goes on which hand or if it is solely up to me to decide )- The more specific you can describe it, the better.</p>
        <textarea id="idea" name="idea"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 3 ? "block" : "none"}}>
        <h2>Placement</h2>
        <p>Please describe the placement (eg: whole top thigh/ above kneecap / lower knuckles etc)</p>
        <textarea id="placement" name="placement"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 4 ? "block" : "none"}}>
        <h2>Size</h2>
        <p>Please enter the size of your tattoo ( eg: 15 x 20 cm or “ whole top thigh / left pec “ -if you dont have a measuring device you can use websites like ‘online ruler’ to get a rough idea)</p>
        <textarea id="size" name="size"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 5 ? "block" : "none"}}>
        <h2>Reference Photos</h2>
        <p>For us to get a better idea of what you are looking for, please include at least one image of something that inspired your idea, (Please note we do not plagiarize others work)</p>
        <input accept="image/png, image/jpeg, image/jpg, image/heif, image/heic" type="file" id="reference-photos" name="referencePhotos" multiple></input>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 6 ? "block" : "none"}}>
        <h2>Placement Photos</h2>
        <p>For us to get a better idea of what you are looking for, please include at least one image of where you would like your tattoo placed. </p>
        <input accept="image/png, image/jpeg, image/jpg, image/heif, image/heic" type="file"  id="placement-photos" name="placementPhotos" multiple></input>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 7 ? "block" : "none"}}>
        <h2>Availability</h2>
        <p>Please tell us the periods when you are available to get tattooed - (eg 17-25th jan or ‘weekdays after 2pm’) </p>
        <textarea id="availability" name="availability"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 8 ? "block" : "none"}}>
        <h2>Email</h2>
        <p>Please tell us your email so we know where to get back to you</p>
        <textarea id="email" name="email"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 9 ? "block" : "none"}}>
        <h2>Name</h2>
        <p>Please tell us your full name</p>
        <textarea id="name" name="name"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>

      <div style={{display: currentTab === 10 ? "block" : "none"}}>
        <h2>Number</h2>
        <p>Please tell us your phone number</p>
        <textarea id="cell-number" name="cell-number"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
      </div>


      <div style={{display: currentTab === 11 ? "block" : "none"}}>
        <h2>Misc</h2>
        <p>Anything else we should know? put it here!</p>
        <textarea id="misc-notes" name="misc-notes"></textarea>
        <button onClick={(e) => onNext(e)}>Continue</button>
        <input type="text" name="_blacklist" style={{display: 'none'}} />
      </div>
        <div style={{display: currentTab === 12 ? 'block' : "none"}}>
            <button type="submit" >Submit</button>
        </div> 

      </form>
    </div> 
  )
}

export default Book