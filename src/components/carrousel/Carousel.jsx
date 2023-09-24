import React, { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightVisible, setrightVisible] = useState(true)
  const [leftVisible, setLeftVisible] = useState(false)

  const items = [
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
        title:"Gynecologist/Obstetrician",
        desc:"Explore for women’s health, pregnancy and infertility treatments"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
        title:"Dentist",
        desc:"Teething troubles? Schedule a dental checkup"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
        title:"Pediatrician",
        desc:"Child Specialists and Doctors for Infant"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
        title:"Dietitian/Nutrition",
        desc:"find the right family doctor in your neighborhood"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
        title:"Orthopedist",
        desc:"For Bone and Joints issues, spinal injuries and more"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
        title:"General Surgeon",
        desc:"Need to get operatied? Find the right surgeon"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
        title:"Physiotherapist",
        desc:"Pulled a muscle? Get it traated by a trained physiotherapist"
    },
    {
        img:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
        title:"Dietitian/Nutrition",
        desc:"Get guidance on eating right, weight management and sports nutrition"
    },
    
    
  ];

  const numVisible = 4;
  const totalItems = items.length;

  const prevSlide = () => {
    
  console.log(currentIndex)

  if(currentIndex<=1)
     {
         setLeftVisible(false);
        }
        else{
            setLeftVisible(true);
        }
        setrightVisible(true);


    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const nextSlide = () => {
    if(currentIndex==3)
    {
        setrightVisible(false);
        
    }
    else
    setrightVisible(true)
    setLeftVisible(true)

   console.log(currentIndex)

    console.log(currentIndex)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const visibleItems = items.slice(currentIndex, currentIndex + numVisible);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleItems.map((item, index) => (
          <div key={index} className="carousel-card">
            <div>
            <img className="slideImg" src={item.img} alt="" />
            </div>
            <div className="carouselTitle">{item.title}</div>
            <div className="carouseldesc">{item.desc}</div>
            
          </div>
        ))}

        {leftVisible&&  <button className="carousel-button left" onClick={prevSlide}>
        &lt;
      </button>
        }
     {
        rightVisible && <button className="carousel-button right" onClick={nextSlide}>
        &gt;
      </button>
    }   
    </div>
      </div>
  );
};

export default Carousel;
