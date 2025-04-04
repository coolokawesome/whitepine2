import React from "react";
import background from "./imgs/conact.png";

function Location() {
  return (
    <div
      className="location-container d-flex align-items-center mt-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img
        className="background-location-img img img-fluid"
        loading="lazy"
      ></img>
      <div className="container inner-location-container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6">
            {/* <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d708.3897032658584!2d-79.884233!3d44.749017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2adb102428cc35%3A0x5e81cb9e310a9bf9!2s309%20King%20St%2C%20Midland%2C%20ON%20L4R%203M5!5e0!3m2!1sen!2sca!4v1682996344242!5m2!1sen!2sca" width="100%" height="500px" style={{border:0, }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> */}
            <iframe
              title="map"
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.5290360029107!2d-79.8869512!3d44.749624399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2adb6b34a25d1d%3A0x54622794935de785!2sWhite%20Pine%20Tattoo%20Inc!5e0!3m2!1sen!2sca!4v1741451184502!5m2!1sen!2sca"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
              <h4 className="text-dark"></h4>
            </iframe>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-5 my-lg-0">
            <div className="my-2 my-lg-5">
              <h4 className="text-light mb-4"> 264 First St #2, Midland, ON</h4>
              <div className="hours-container-outer">
                <div className="hours-container ">
                  <h4 className="text-center pb-4">Days:</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-start">Monday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Tuesday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Wednesday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Thursday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Friday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Saturday:</td>
                        <td className="text-end">10am - 6pm</td>
                      </tr>
                      <tr>
                        <td className="text-start">Sunday:</td>
                        <td className="text-end closed">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
