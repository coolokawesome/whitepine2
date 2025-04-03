/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import NavigationItemHeader from "./NavigationItemHeader";
import NavigationHeaderImg from "./imgs/banner.webp";
import Footer from "./Footer";
import { Jeff, Anna } from "./objects";

function Galleries({ setSelectedImgIndex, selectedImgIndex, imgs, setImgs }) {
  const [selected, setSelected] = useState("All");
  const handleSelected = (param) => {
    setSelected(param);
  };
  useEffect(() => {
    let newArray = [];
    if (selected === "Anna") {
      Anna.forEach((img) => {
        newArray.push(img);
      });
      setImgs(newArray);
    }
    if (selected === "Jeff") {
      Jeff.forEach((img) => {
        newArray.push(img);
      });
      setImgs(newArray);
    }
    if (selected === "All") {
      console.log(
        [...Anna, ...Jeff].map((item) => ({ item, sort: Math.random() }))
      );
      setImgs(
        [...Anna, ...Jeff]
          .map((item) => ({ item, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ item }) => item)
      );
    }
  }, [selected]);

  useEffect(() => {
    const wrapper = document.getElementsByClassName("wrapper")[0]; 
    if (wrapper) {
      if (selectedImgIndex !== undefined) {
        wrapper.style.overflow = "hidden";
      } else {
        wrapper.style.overflow = "auto";
      }
    }
  }, [selectedImgIndex]);

  return (
    <>
      <NavigationItemHeader img={NavigationHeaderImg} name={"Galleries"} />
      <div className="container">
        <div className="row d-flex align-items-center mt-3">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="d-flex justify-content-center align-items-center">
              <h5 className="text-light display-6">{selected}</h5>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <button
              className={`btn px-4 mx-1  ${
                selected === "All" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => handleSelected("All")}
            >
              All
            </button>
            <button
              className={`btn px-4 mx-1 ${
                selected === "Anna" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => handleSelected("Anna")}
            >
              Anna
            </button>
            <button
              className={`btn px-4 mx-1 ${
                selected === "Jeff" ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => handleSelected("Jeff")}
            >
              Jeff
            </button>
            {/* <select class='artist-selection' onChange={handleSelected} value={selected} name="gallery" id="gallery">
        <option value="Anna">Anna</option>
        <option value="Jeff">Jeff</option>
        <option value="All" defaultValue={'All'}>All</option>
      </select> */}
          </div>
        </div>
      </div>
      <div className="gallery-container container">
        <div className="row my-4 ">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 col-xl-3 gallery-img-container my-2 d-flex justify-content-center"
              onClick={() => setSelectedImgIndex(index)}
            >
              <img
                className="img img-fluid gallery-img"
                src={require(`${img}`)}
                style={{ animationDelay: `${index * 0.1}s` }}
                loading="lazy"
              ></img>
            </div>
          ))}
        </div>
       
      </div>
      <Footer />
    </>
  );
}

export default Galleries;
