import React, {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ContactHome() {
    const [modal, setModal] = useState(false)
    const [noReRender, setNoReRender] = useState(false)

    const handleModal = () => {
        if (noReRender == false) {
            setNoReRender(true)
            setModal(true)
        }
        else return
    }

    const handleClose = () => {
        setModal(false)
    }



  return (
    <div className='contact-container'>
        <div className='container'>
            <div className='row'>
                <div className=''>
                    <h3 className='display-4 text-light text-center my-4'>Want to schedule an appointment?</h3>
                </div>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2 contact-outer-frame mb-5 '>
                    <div className='contact-inner-frame bg-dark p-4 rounded-3  rounded-lg-0'>
                    <form action="https://formspree.io/f/mvonqrwa" method="POST">
                        <label for='name' className='form-label text-light'>Name:</label>
                        <input class="form-control" type="name" name="name" required />
                        <label className='mt-3 form-label text-light' for='email'>Email:</label>
                        <input class="form-control" type="email" name="email"  required />
                        <label className='mt-3 form-label text-light' for='phone'>Phone Number:</label>
                        <input class="form-control" type="phone" name="phone" required />
                        <label className='mt-3 form-label text-light' for='message'>Your Message:</label>
                        <textarea onFocus={handleModal} class="form-control"  name="message" rows="6" minlength="50"></textarea>
                        <button class="mt-4 col-12 btn btn-submit btn-primary" type="submit">Send</button>
                    </form>
                    <h5 className='text-light text-center mt-5'>Or Contact us directly at: whitepinetattoos@gmail.com</h5>
                    </div>
                <div>
                    
                </div>
                </div>
            </div>
        </div>
        {/* modal */}
    {
        modal == true ?         
        <Modal show={handleModal} onHide={handleClose} size='lg'>
        <Modal.Header closeButton >
          <Modal.Title><h1 >Appointment Policies</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                Thank you for reaching out!
                We strive to provide the best experience possible. Before proceeding, we kindly request that you review the following policies to ensure a smooth and hassle-free process.
            </p>
            <h5 className='text-center mt-4 modal-header-text'>Deposits and Payment</h5>
            <p>
                Deposits are a non-refundable placeholder and will be deducted from the final price of your completed tattoo. We kindly ask that you make your decision with confidence, as changes to your tattoo idea cannot be accommodated once the process has begun. The deposit amount varies based on the service you are receiving, typically ranging from<b> $60 to $120</b>. To secure your appointment, we will request payment through an invoice and ask to have your card on file.
            </p>
            <h5 className='text-center mt-4 modal-header-text'>Appointment Rescheduling and Cancellations:</h5>
            <p>
                We understand stuff happens! You are allowed to reschedule your appointment once with a minimum notice of 48 hours. However, please be aware that any rescheduling will require forfeiting the initial deposit and placing a new one.<b> Please make sure to pay your deposit within 48 hours</b> from the time of your booking. Failure to pay the deposit and provide card information will result in cancellation of your appointment.
            </p>
            <h5 className='text-center mt-4 modal-header-text'>Timeliness and Attendance:</h5>
            <p>
                To ensure a smooth operation and respect the time of both our business and our artists, we kindly request your punctuality. We recommend <b>arriving early</b> to allow time for parking and to complete necessary consent forms. Appointments have a 15-minute grace period, during which we will attempt to contact you via phone and text. After 30 minutes, you will be considered a no-show, and your card will be charged 50% of the service you booked. We have implemented this policy to protect the business and the valuable time of our artists!
            </p>
            
            <p>
            Thank you for taking the time to read and understand our policies. By adhering to these guidelines, you help us provide the best possible service. We look forward to working with you!
            </p>
            <Link to='/galleries'>
                <p className='text-center link-success'>Terms & Conditions</p>
            </Link>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            I Understand
          </Button>
        </Modal.Footer>
      </Modal> 
      : 
      <></>
    }
    </div>
    
  )
}

export default ContactHome