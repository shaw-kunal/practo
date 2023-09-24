import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import Offer from '../../components/Offer/Offer';
import DoctorList from '../../components/doctorsList/DoctorList';
import SearchBy from '../../components/SearchBy/SearchBy';
import { Typography } from '@mui/material';
import Carousel from '../../components/carrousel/Carousel';

// console.log(specialtiesArray);

// console.log(majorCitiesArray);



const Home = () => {

  const consultArray = [{
    img: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
    title: "Period doubts or Pregnancy",
  },
  {
    img: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png',
    title: "Acne, pimple or skin issues"
  },
  {
    img: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg',
    title: "Performance issues in bed"
  },
  {
    img: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png',
    title: "Consult for Cold, cough or fever "
  },
  {
    img: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg',
    title: "Child not feeling well"
  },
  {
    img: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
    title: "Depression or anxiety"
  }
  ]

  const carouselItems = [
    {
      image: 'image1.jpg',
      title: 'Image 1',
    },
    {
      image: 'image2.jpg',
      title: 'Image 2',
    },
    {
      image: 'image3.jpg',
      title: 'Image 3',
    },
    // Add more items as needed
  ];



  return (
    <>
      <Navbar />
      <SearchBy navigateToList={true} />
      <Offer />
      {/* <DoctorList /> */}

      <div className="ConsultContainer">
        <div className='headingContainer'>

        <h2 className='heading'>Consult top doctors online for any health concern</h2>
        <span>Private online consultations with verified doctors in all specialists</span>
        </div>
        <div className='consultsItems'>

          {
            consultArray.map((c, i) => (
              <div key={i} className='consultItem'>
                <img className="consultImg" src={c.img} alt="" />
                <span className='consultantTitle'>{c.title}</span>
                <span className='consultNow'>CONSULT NOW</span>
              </div>
            ))
          }




        </div>
      </div>

      <Carousel />
  

    </>
  )
}

export default Home