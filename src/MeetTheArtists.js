import React from "react";
import Anne1 from "./imgs/anne1.jpeg";
import Jeff1 from "./imgs/jeff/jeff3.png";
import Dolly1 from "./imgs/dolly1.jpeg";

import JeffFace from "./imgs/jeff/Jeffface.JPG";
import { Link } from "react-router-dom";
function MeetTheArtists() {
  return (
    <div className="artists-container bg-dark text-light">
      <div className="container">
        <h2 className="text-center display-3 border-bottom">Meet our Team</h2>
        <div className="row d-flex align-content-center flex-wrap my-5">
          <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end pe-0 pe-lg-5">
            <div className="p-2 img-frame">
              <img
                src={Anne1}
                className=" meet-the-artists-img img img-fluid"
                style={{ filter: "saturate(60%)" }}
                loading="lazy"
              ></img>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="">
              <div>
                <h3 class="text-light text-center text-lg-start display-5 px-5 px-lg-0 pe-lg-5 ">
                  Anna
                </h3>
                <div className="text-box p-1">
                  <p className="text py-2">
                    Anna has been a tattoo artist of 17+ years in the industry.
                    She has done conventions in Toronto, worked alongside with
                    many award-winning artists and beautiful shops.
                  </p>
                  <p className="text py-2">
                    Anna’s work differs as every year offers growth and
                    evolution, and is pleased to offer to do a bit of every
                    style of tattooing. Some of her preferences are black and
                    grey, floral; illustrative and traditional color tattoos.
                  </p>
                  <p className="text py-2">
                    Tattoos are ceremonial and they should be honoured in your
                    skin in a collaborative and interactive effort from both of
                    us. As an artist first, I work specializing in large-scale
                    to ensure the preliminary design is perfect and suited to
                    your body.
                  </p>
                  <p className="text py-2">
                    Feel free to let Anna guide you through this very personal
                    individual tattoo experience and ensure you are as
                    comfortable as possible!
                  </p>
                </div>
                <div className="socials-container d-flex justify-content-center justify-content-lg-start">
                  <Link
                    target="_blank"
                    to="https://instagram.com/rabbitmoontattoos_"
                    className="me-2 social-link"
                  >
                    <i class="fa-xl fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="./galleries" className="mx-2 a-link">
                    <b>SEE PORTFOLIO {">"}</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-content-center flex-wrap my-5">
          <div class="col-12 col-lg-6 col-xl-5 d-flex justify-content-center justify-content-lg-start order-first order-lg-last ps-0 ps-lg-5">
            <div>
              <div className="p-2 img-frame">
                <img
                  src={JeffFace}
                  className=" meet-the-artists-img"
                  loading="lazy"
                  style={{ filter: "saturate(80%)" }}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 ofset-0 offset-xl-1 d-flex align-items-center">
            <div className="">
              <div>
                <h3 class="text-light text-center text-lg-end display-5">
                  Jeff
                </h3>
                <p className="text text-center text-lg-end py-2">
                  Jeff is a skilled illustrator known for his fine-line black
                  ink drawings. His larger pieces could take up to two weeks to
                  complete due to the meticulous attention to detail that he
                  puts into each piece. In recent years, Jeff has been exploring
                  different mediums like gouache, acrylics, and oil paints.
                </p>
                <p className="text text-center text-lg-end py-2">
                  Aside from his passion for art, Jeff also has a keen interest
                  in tattooing. He has been practicing for just over a year,
                  specializing in illustrative blackwork and creates smooth,
                  soft-shaded black and grey medium-sized tattoos. When he is
                  not creating art, Jeff enjoys spending time with his family,
                  attending concerts, playing video games, and watching anime.
                </p>
                <div className="socials-container d-flex justify-content-center justify-content-lg-end">
                  <Link
                    target="_blank"
                    to="https://instagram.com/heavyhoundtattoos"
                    className="me-2 social-link"
                  >
                    <i class="fa-xl fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="./galleries" className="mx-2 a-link">
                    <b>SEE PORTFOLIO {">"}</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-content-center flex-wrap my-5">
          <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end pe-0 pe-lg-5">
            <div className="p-2 img-frame">
              <img
                src={Dolly1}
                className=" meet-the-artists-img img img-fluid"
                style={{ filter: "saturate(60%)" }}
                loading="lazy"
              ></img>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="">
              <div>
                <h3 class="text-light text-center text-lg-start display-5 px-5 px-lg-0 pe-lg-5 ">
                  Dolly
                </h3>
                <div className="text-box p-1">
                  <p className="text py-2">
                    Dolly is our lovely new assistant whom we found by kismet
                    and luck. She’s been in customer service for 15 years, and
                    is now entrusted in our space for your tattoo booking needs
                    with care and a smile.
                  </p>
                  <p className="text py-2">
                    She has a penchant for plants and horticulture, jewelry
                    making and wirewrapping, crystal and mineral collecting, and
                    is an avid tattoo collector and enthusiast. You can bet if
                    she’s working, you’ll have some laughs and good vibes! If
                    you have any questions, just feel free to send us a message
                    or email and ask Dolly; who takes on your questions so we
                    can focus on what we do best, tattoos{" "}
                  </p>
                </div>
                <div className="socials-container d-flex justify-content-center justify-content-lg-start">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheArtists;
