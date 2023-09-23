import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import Offer from '../../components/Offer/Offer';
import DoctorList from '../../components/doctorsList/DoctorList';
import SearchBy from '../../components/SearchBy/SearchBy';

// console.log(specialtiesArray);

// console.log(majorCitiesArray);



const Home = () => {

 

  return (
    <>
      <Navbar />
      <SearchBy/>
      <Offer />
      {/* <DoctorList /> */}
    </>
  )
}

export default Home