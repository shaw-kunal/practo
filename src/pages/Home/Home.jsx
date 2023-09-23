import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Autocomplete, TextField } from '@mui/material'
import "./Home.css"
import SearchIcon from '@mui/icons-material/Search';
import { majorCitiesArray, specialtiesArray } from "./../../db/database.js"
import Offer from '../../components/Offer/Offer';
import DoctorList from '../../components/doctorsList/DoctorList';

console.log(specialtiesArray);

console.log(majorCitiesArray);



const Home = () => {

  const [city, setCity] = useState("Bangalore");
  const [spcialist, setSpcialist] = useState("General Medicine");

  console.log(city);
  console.log(spcialist);
  return (
    <>
      <Navbar />

      <div className='SearchContainer'>
        <div className='citySearch'>
          <Autocomplete
            id='free-solo-demo'
            freeSolo
            options={majorCitiesArray.map((option, index) => ({ label: option, value: index }))} // Add unique keys
            renderInput={(params) => <TextField {...params} label="city" />}
            onChange={(event, value) => {
              if (value !== null) {
                setCity(value.label)
              }
              else {
                setCity("Bangalore");
              }
            }
            } // Update state with the selected value
          />

        </div>

        <div>

          <Autocomplete
            id='free-solo-demo'
            freeSolo
            options={specialtiesArray.map((option, index) => ({ label: option, value: index }))}
            renderInput={(params) => <TextField {...params} label="Search Doctor" />}
            onChange={(event, value) => {
              if (value !== null) {
                setSpcialist(value.label)
              } else {
                setSpcialist("General Medicine");
              }
            }}
          />

        </div>
        <button className='searchBth'><SearchIcon />search</button>



      </div>

      <Offer />
      <DoctorList />

    </>
  )
}

export default Home