import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { majorCitiesArray, specialtiesArray } from "./../../db/database.js"

import "./searchBy.css"
import { Link } from 'react-router-dom';

const SearchBy = () => {
  const [city, setCity] = useState("Bangalore");
  const [spcialist, setSpcialist] = useState("General Medicine");
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

  )
}

export default SearchBy