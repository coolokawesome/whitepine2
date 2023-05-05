import React from 'react'
import NavigationItemHeader from './NavigationItemHeader'
import NavigationHeaderImg from './imgs/banner.webp'
import Footer from './Footer'
import ContactHome from './ContactHome'
import PDF from './etc/aftercare.pdf'
function FAQ() {
  return (
    <>
    <NavigationItemHeader img={NavigationHeaderImg} name={'Frequently Asked Questions'} />
    
    <section class="container faq-container mt-4">
        <div className='row'>
        <div className='col-12 col-lg-4 text-center'>
            <a target="_blank"
                href={PDF}
                class="text-decoration-none link-light ">
                <h5 class="aftercare-link link-light">View Our Aftercare PDF →</h5>
            </a>
        </div>
        </div>
        <div class="row">
            <div class="col-0 col-md-4 col-sm-hidden mb-5">
                <nav id="navbar"
                    class="h-70 overflow-y-scroll flex-column align-items-stretch faq-selection">
                    <nav class="nav nav-pills flex-column">
                        <a class="faq-link nav-link link-light" href="#item-1">How can I book an appointment?</a>
                        <a class="faq-link nav-link link-light" href="#item-2">Can I see my design before my
                            appointent?</a>
                        <a class="faq-link nav-link link-light" href="#item-3">How old do I need to be to get
                            tattooed?</a>
                        <a class="faq-link nav-link link-light" href="#item-4">Can I bring a friend?</a>
                        <a class="faq-link nav-link link-light" href="#item-6">Are you accepting apprenticeships?</a>
                        <a class="faq-link nav-link link-light" href="#item-7">Are your products vegan?</a>
                        <a class="faq-link nav-link link-light" href="#item-8">How much do tattoos cost?</a>
                        <a class="faq-link nav-link link-light" href="#item-9">How long will my tattoo take to heal?</a>
                        <a class="faq-link nav-link link-light" href="#item-10">Do you do cover-ups/rework other artists
                            tattoos?</a>
                        <a class="faq-link nav-link link-light" href="#item-11">Do tattoos hurt?</a>
                        <a class="faq-link nav-link link-light" href="#item-12">Are we supposed to tip?</a>
                        <a class="faq-link nav-link link-light" href="#item-13">Will my tattoo fade?</a>
                        <a class="faq-link nav-link link-light" href="#item-14">How should I prepare for my tattoo
                            appointment?</a>
                        <a class="faq-link nav-link link-light" href="#item-15">Do you take walk-ins?</a>
                        <a class="faq-link nav-link link-light" href="#item-16">Are touch-ups free?</a>
                        <a class="faq-link nav-link link-light" href="#item-17">What if I no-show, come late, or
                            reschedule?</a>
                        <a class="faq-link nav-link link-light" href="#item-18">Can I get tattooed while nursing or
                            pregnant?</a>
                        <a class="faq-link nav-link link-light" href="#item-19">How do I pay?</a>

                    </nav>
                </nav>
            </div>

            <div class="col-12 col-md-8 mb-5">
                <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true"
                    class="scrollspy-example-2 bg-dark" tabindex="0">
                    <div id="item-1">
                        <h4 class="faq-title">How can I book an appointment?</h4>
                        <p>You can email our assistant with your information, please ensure you include a few reference
                            photos, and include a description for us for your tattoo, try to include all your details
                            such as subject matter, size, placement on your body and a photograph of where you want it
                            so we can ensure to work around any existing work and determine a healthy canvas. We enjoy a
                            custom project as much as we enjoy creating it together, with you. We want to ensure you
                            love your tattoo, but we cannot read minds! Ensure you include as much as possible for the
                            best possible result. You can find our contact info on the contact page, or just shoot us an
                            email. We look forward to hearing from you!
                        </p>
                    </div>
                    <div id="item-2">
                        <h4 class="faq-title">Can I see my design before my apointment?</h4>
                        <p>Unless you are receiving multi-session, you will not see your art until your appointment
                            date. We book extra time in most cases to make changes on the spot. We use digital drawing
                            and in worst cases make changes in less than 15 minutes. We ask that you do not last minute
                            make a drastic change or your tattoo without proper notice.</p>
                    </div>
                    <div id="item-3">
                        <h4 class="faq-title">How old do I need to be to get tattooed?</h4>
                        <p>
                            For insurance purposes, we only tattoo 18+ plus.
                        </p>
                    </div>
                    <div id="item-4">
                        <h4 class="faq-title">Can I bring a friend?
                        </h4>
                        <p>We are a small space and we ask that you come alone for your personalized experience. Plus,
                            watching a tattoo is fun for maybe the first 10 minutes, your buddy will get bored! </p>
                    </div>
                    <div id="item-6">
                        <h4 class="faq-title">Are you accepting apprenticeships?</h4>
                        <p>We are not accepting apprenticeships. It is a lengthy ordeal and small space, and it’s like
                            attending school. It takes a lot of time invested through both parties. That being said, we
                            encourage you to get tattooed, keep drawing and keep pursuing your dream and passion because
                            it is an amazing industry.</p>
                    </div>
                    <div id="item-7">
                        <h4 class="faq-title">Are your products vegan?</h4>
                        <p>We use all vegan, plant-based and cruelty-free products. Our shop is also 95% eco-friendly.
                            If you’d like to see our products, feel free to ask.
                        </p>
                    </div>
                    <div id="item-8">
                        <h4 class="faq-title">How much do tattoos cost?</h4>
                        <h5 class="text-light">Jeff</h5>
                        <ul>
                            <li class="text-light">$120 base minimum, plus tax</li>
                            <li class="text-light">Half day rate (3 hrs) - $360 plus tax</li>
                            <li class="text-light">Full day rate (6 hrs) is $720 plus tax</li>
                        </ul>
                        <h5 class="text-light">Anna</h5>
                        <ul>
                            <li class="text-light">Anna - $660 half day rate minimum</li>
                            <li class="text-light">Full day rate (6 hrs) is $1200 plus tax.</li>
                        </ul>
                        <p>
                            These are just quotes to ensure there aren’t any surprises the day of.
                            Please feel free to ask in advance and give us a heads about budget before booking your
                            artist.
                        </p>
                    </div>



                    <div id="item-9">
                        <h4 class="faq-title">How long will my tattoo take to heal?</h4>
                        <p>Usually it takes several weeks to have your tattoo fully healed. That’s why it’s important to
                            keep your tattoo and your personal environment clean and optimal for healing your wound. You
                            may want to kick kitty or doggy outta your bed until it’s a closed wound, as they are known
                            to carry bacteria and *poo* particles in their fur.
                        </p>
                        <p>It will be wise to reduce contact with
                            dangerous bacteria by not exposing your body to heat from saunas, going to the gym, going
                            swimming in lakes, pools, oceans and hot tubs, even baths. Try and avoid submerging for
                            prolonged periods in bodies of water. Let’s say you have a hand tattoo, try to avoid washing
                            hair if you’re a hair stylist or dog groomer and use your hands for work. Follow your
                            artists aftercare accordingly to ensure you have no problems once you leave the studio!


                        </p>
                    </div>
                    <div id="item-10">
                        <h4 class="faq-title">Do you do cover-ups/rework other artists tattoos?</h4>
                        <p>In some cases, we accept cover ups usually if it’s faded/small. We also need you to trust us
                            twice as much and have an open mind and a great idea. Just email us and ensure you have a
                            clear photo and an open mind. We also sometimes can tattoo over scars if they’re
                            hypo-pigmented, not incredibly raised and over 2 years old. We operate on the base of
                            trauma-informed tattooing, and work sensitively with those with SH scars. Please email us!
                            We will also not touch another artists work unless they have moved provinces or countries,
                            or other circumstances, or if the client is truly unhappy with the result.
                        </p>
                    </div>
                    <div id="item-11">
                        <h4 class="faq-title">Do tattoos hurt?</h4>
                        <p>We are working with needles, so yes! They can hurt. It feels like a cat scratching your fresh
                            sunburn. It also tends to get tender after a couple hours. But every body is different and
                            have different pain tolerances. Pain can be further minimized by ensuring you slept well,
                            ate, and stayed sober for your appointment.
                        </p>
                        <p>
                            Tattoos wouldn’t be as popular if they were unbearable. We will be offering Zensa numbing
                            products for your comfort if you’re wanting the tattoo without the extreme pain! Just let us
                            know I’m advance.


                        </p>
                    </div>
                    <div id="item-12">
                        <h4 class="faq-title">Are we supposed to tip?</h4>
                        <p>It’s not required, and it would be tacky of us to ask! But anything is greatly appreciated!
                        </p>
                    </div>
                    <div id="item-13">
                        <h4 class="faq-title">Will my tattoo fade?</h4>
                        <p>They can fade if you expose them to sun when they’re brand new, or micro-exposures to the sun
                            are ways you can fade your tattoo and most likely will cause the image to blur and lose its
                            clarity and tone. Keep it protected with SPF!
                        </p>
                    </div>
                    <div id="item-14">
                        <h4 class="faq-title">How should I prepare for my tattoo
                            appointment?</h4>
                        <p>Ensure you get a good nights rest the night before, stay hydrated, eat, avoid heavy sun for
                            two weeks before your appointment. Do not drink 24 hours before your appointment. Let your
                            artist know if you are using any sort of numbing agents before we start your tattoo. Wear
                            appropriate fitting clothing for your appointment. If you need suggestions there any many
                            online or you can ask your artist. Don’t wear a turtleneck the day of your neck tattoo!
                        </p>
                    </div>
                    <div id="item-15">
                        <h4 class="faq-title">Do you take walk-ins?</h4>
                        <p>We encourage your to call ahead, but we will be offering walk ins <b><u>Tuesdays</u></b> for the time
                            being. It will be first come first served. Please be aware that our studio cannot
                            accommodate more than 4 people at any given time, so please be mindful of this and please
                            ask ahead!
                        </p>
                    </div>
                    <div id="item-16">
                        <h4 class="faq-title">Are touch-ups free?</h4>
                        <p>We do charge a small set up fee of $60 plus tax to touch up tattoos we have done. If you get
                            a new tattoo, we will include your free touch up.
                        </p>
                    </div>
                    <div id="item-17">
                        <h4 class="faq-title">What if I no-show, come late, or
                            reschedule?</h4>
                            <p>We understand emergencies happen, and emergencies, but we have the right to use our
                                description to make a judgement call that may result in the loss of your deposit. Artists
                                rely on their clients for income, and we are running a legitimate business so we need to
                                keep this in mind for accommodating those who are serious about getting tattooed. If you are
                                worried about forgetting, we send our reminder emails to ensure your know when you need to
                                be there.
                            </p>
                            <p>We usually have a 15 minute grace period if you are late, but if we have waited over a half
                                hour without any word from you, we will be cancelling your appointment and will be charging
                                half of either the half/full day appointment placed on the payment details provided at the
                                time of booking.
                            </p>
                            <p>
                                If you are sick, please let us know as soon as you can. If you are exhibiting signs of being
                                under the influence of alcohol, we will ask you to leave resulting in loss of deposit and
                                possibly penalty fees.
                            </p>
                    </div>
                    <div id="item-18">
                        <h4 class="faq-title">Can I get tattooed while nursing or pregnant?</h4>
                        <p>
                            We do not recommend you receiving a tattoo nursing or pregnant, our immune systems are considered immunosuppressed. If you receive an infection you could possibly pass it to baby, so It’s best to wait until you’ve back to optimal health before considering a tattoo. 
                        </p>
                        
                    </div>
                    <div id="item-19">
                        <h4 class="faq-title">How do I pay?</h4>
                        <p>We accept cash, debit, visa and mastercard. E-transfer is not accepting except for last
                            resort situations. Save the tax and pay us with cash!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default FAQ