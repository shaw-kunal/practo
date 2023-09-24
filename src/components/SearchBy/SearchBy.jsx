import React, { useContext, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { majorCitiesArray, specialtiesArray } from "./../../db/database.js"

import "./searchBy.css"
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context.js';
import { SetCity, SetSpecialist } from '../../context/Action.js';

const SearchBy = ({ navigateToList }) => {

  const [cityRef, setCityRef] = useState("")
  const [specialistRef, setsetspecialistRef] = useState("")
  const { city, dispatch, specialist } = useContext(Context)
   const navigate = useNavigate();


  const handleSearch = (e) => {
    // here  first update the your context api
    e.preventDefault();
    dispatch(SetCity(cityRef));
    dispatch(SetSpecialist(specialistRef)); 
    {
      navigateToList && navigate("/list")
    }


  }

  return (



    <div className='SearchContainer'>
      <div className='citySearch'>
        <Autocomplete
          id='free-solo-demo'
          freeSolo
          options={majorCitiesArray.map((option, index) => ({ label: option, value: index }))} // Add unique keys
          renderInput={(params) => <TextField {...params} label="city" />}
          onChange={(event, value) => {
            if (value !== null) {
              setCityRef(value.label)
            }
            else {
              setCityRef("");
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
              setsetspecialistRef(value.label)
            } else {
              setsetspecialistRef("");
            }
          }}
        />

      </div>

      <button className='searchBth' onClick={handleSearch}><SearchIcon />search</button>

  

    </div>

  )
}

export default SearchBy