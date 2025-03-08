import React from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'

function Privacy() {
  return (
   <div>
     <NavigationItemHeader img={NavigationHeaderImg} name={'Privacy'}/>
    <div className='privacy-container container'>
        <div className='row'>
            <div className='col-12 col-md-8 col-lg-6 offset-0 offset-md-2 offset-lg-3 my-5 privacy-inner'>
            <h5>Privacy Policy</h5>

                <p>
                Effective Date: 2023-05-10
                </p>

                <p>
                At White Pine Tattoos, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose information when you visit our website, whitepinetattoos.ca, and engage our tattoo services. By using our website and services, you consent to the practices described in this policy.
                </p>

                <h5>Information Collection</h5>

                <p>
                We do not collect any personal information about you unless voluntarily provided by you. However, we may keep a copy of the client's consent form for an undisclosed amount of time after a tattoo session. The consent form may be saved for future reference.
                </p>

                <h5>Cookies and Tracking Technologies</h5>

                <p>
                Our website uses cookies and may employ Google Analytics to track user data for the purpose of improving our services and providing targeted advertisements. Please note that no personal information is gathered or sold through these processes.
                </p>

                <h5>Information Sharing</h5>

                <p>
                We do not disclose any personal information to third parties without your explicit consent, except as required by law or as necessary to protect our rights, property, or safety.
                </p>

                <h5>Data Security</h5>

                <p>
                We take reasonable measures to safeguard the personal information we collect and store. However, please be aware that no method of transmission or storage is completely secure. We cannot guarantee the absolute security of your information.
                </p>

                <h5>Right to Refuse Service</h5>

                <p>
                We have the right to use our discretion and refuse service to certain individuals. We appreciate those who acknowledge and respect our time and effort in making the best tattoo and experience possible for our valued customers.
                </p>

                <h5>Your Rights</h5>

                <p>
                You have the right to access, modify, or delete any personal information we hold about you. If you have any inquiries or would like to exercise these rights, please contact us using the information provided below.
                </p>

                <h5>Compliance with Canadian Laws</h5>

                <p>
                We comply with all applicable Canadian laws and regulations regarding data protection and privacy.
                </p>

                <h5>Contact Us</h5>

                <p>
                If you have any questions, concerns, or requests regarding your privacy or this privacy policy, please contact us:<br />
                Email: whitepinetattoos@gmail.ca<br />
                Address: 309 King St, Midland, ON
                </p>
            </div>
        </div>
    </div>
    <Footer />
   </div>
  )
}

export default Privacy