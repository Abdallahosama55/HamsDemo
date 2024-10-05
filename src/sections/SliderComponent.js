import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import img1 from '../assets/images/1img.svg';
import img2 from '../assets/images/2img.svg';
import { FaStar } from "react-icons/fa";
import {MdOutlineStarRate } from "react-icons/md";
// Array of images
const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img1, alt: "Image 3" },
  { id: 4, src: img2, alt: "Image 4" },
  { id: 5, src: img1, alt: "Image 5" },
  { id: 6, src: img2, alt: "Image 6" },
  { id: 7, src: img1, alt: "Image 7" },
  { id: 8, src: img2, alt: "Image 8" },
];

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 1000, // Set speed for auto-scroll
    centerMode: true, // Center the items
    centerPadding: "24px", // No padding around center slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false, // Disable centering on smaller screens
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className="slider-container" >
      <h3 className="text-[20px] flex items-center justify-center font-bold text-center py-12  text-transparent bg-clip-text text-[#3132A9]">
      <MdOutlineStarRate color="#555695" /><span className="text-[#000] pe-3">{t("trust")}</span> 
      <span className=" text-[#3132A9]">{t("know-more-title")}</span>
      <MdOutlineStarRate color="#555695" />
      </h3>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="flex justify-center items-center h-24 w-full  ">
            <img src={image.src} alt={image.alt} className=" h-full  w-full   " />
          </div>
        ))}
        
      </Slider> 
    </div>
  );
}

export default SliderComponent;
