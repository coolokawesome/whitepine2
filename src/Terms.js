import React from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'
function Terms() {
  return (
    <div>
        <NavigationItemHeader img={NavigationHeaderImg} name={'Terms & Conditions'}/>
        <div className='terms-container container'>
            <div className='row'>
            <div className='col-12 col-md-8 col-lg-6 offset-0 offset-md-2 offset-lg-3 my-5 privacy-inner'>
            <h5>Terms and Conditions</h5>

<p>
  Welcome to White Pine Tattoos! These terms and conditions outline the rules and regulations for the use of our services and website, whitepinetattoos.ca. By engaging our services and using our website, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our services or accessing our website.
</p>

<h5>Deposits and Payments</h5>

<p>
  Deposits are a non-refundable placeholder and come off the final price of your tattoo once completed. Please ensure you are 100% certain about your decision, as you cannot change your tattoo design once it is finalized. The deposit amount will depend on the service you are receiving, and we will request an invoice to be paid with your card on file. Deposits typically range from $60 to $120. You have 48 hours to pay your deposit from the time of your booking. Failure to pay the deposit or provide card information will result in the cancellation of your appointment.
</p>

<h5>Rescheduling and Cancellations</h5>

<p>
  You may reschedule your appointment once with at least 48 hours' notice. However, if you need to reschedule again, you will forfeit your deposit and will be required to put down a new one. We understand that unforeseen circumstances may arise, but please respect our time and provide us with adequate notice. Failure to show up for your appointment without prior notice will result in a charge of 50% of the booked service cost to your card.
</p>

<h5>Appointment Policy</h5>

<p>
  It is your responsibility to arrive on time for your appointment. We recommend arriving early to find parking and fill out any necessary consent forms. Appointments have a 15-minute grace period, during which we will try to contact you via phone and text. If you have not arrived within 30 minutes of your scheduled time, you will be considered a no-show, and your card will be charged 50% of the service cost. These policies are in place to protect our business and ensure fairness to our artists.
</p>

<h5>Retention of Consent Forms</h5>

<p>
  We may retain a copy of your signed consent form for an undisclosed amount of time after your tattoo session. This allows us to refer back to the form for future reference if needed. Rest assured that we will handle your personal information with care and in accordance with our Privacy Policy.
</p>

<h5>Changes to Terms and Conditions</h5>

<p>
  We reserve the right to modify or replace these terms and conditions at any time. Any changes will be effective upon posting the revised terms on our website. We encourage you to review these terms periodically for any updates.
</p>

<h5>Contact Us</h5>

<p>
  If you have any questions or concerns regarding our terms and conditions, please contact us:<br/>
  Email: whitepinetattoos@gmail.ca<br/>
  Address: 309 King St, Midland, ON
</p>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Terms