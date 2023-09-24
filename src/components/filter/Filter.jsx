import React, { useContext, useState } from 'react'
import "./filter.css"
import { Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material'
import { Context } from '../../context/Context'
import { SetFees, SetGender, SetSort } from '../../context/Action'
const Filter = () => {
  const [fee, setFee] = useState(0)
  const [selectedGenders, setSelectedGenders] = useState(0);
  const [sortBy, setSortBy] = useState(0);

  const {sort,dispatch,fees,gender} =useContext(Context);

  const handlefeeChange = (event) => {
    event.preventDefault();
    setFee(event.target.value);
    dispatch(SetFees(event.target.value));
  }


  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    dispatch(SetSort(event.target.value));

  }

  const handleGenderChange=(event)=>{
    setSelectedGenders(event.target.value);
    dispatch(SetGender(event.target.value));

  }



  return (
    <div className='filterContainer'>


      {/* // sort by  */}
      <Box sx={{
        display:"flex",
        borderBottom:"1px solid #e4dddd",
        padding:"0px 0px 10px 0px",


      }}>
        <Typography variant="h6" component="h2" width={100}>
          Sort by:
        </Typography>
        <RadioGroup
          aria-label='sort'
          name='sort'
          value={sortBy}
          onChange={handleSortChange}

        >
          {/* <FormControlLabel value="0" control={<Radio />} label="All" /> */}
          <FormControlLabel value="1" control={<Radio />} label="Low to high" />
          <FormControlLabel value="2" control={<Radio />} label="High to Low" />
          <FormControlLabel value="3" control={<Radio />} label="Year of Experience" />
          <FormControlLabel value="4" control={<Radio />} label="Recommendation" />
        </RadioGroup>
      </Box>

      <Box sx={{
        padding:"10px 0px",
        display:"flex",
        borderBottom:"1px solid #e4dddd"
      }}>
        <Typography variant="h6" component="h2"width={100} >
          Fee:
        </Typography>
        <RadioGroup
          aria-label='fee'
          name='fee'
          value={fee}
          onChange={handlefeeChange}
        >

          <FormControlLabel value="0" control={<Radio />} label="All" />
          <FormControlLabel value="1" control={<Radio />} label="Free" />
          <FormControlLabel value="2" control={<Radio />} label="1-200" />
          <FormControlLabel value="3" control={<Radio />} label="201-500" />
          <FormControlLabel value="4" control={<Radio />} label="501" />
        </RadioGroup>
      </Box>


      <Box sx={{
        display:"flex",
        borderBottom:"1px solid #e4dddd",
        padding:"10px 0px"

      }}>
        <Typography variant="h6" width={100}>Gender :</Typography>
        <RadioGroup
          aria-label='gender'
          name='gender'
          value={selectedGenders}
          onChange={handleGenderChange}
        >
          <FormControlLabel value="0" control={<Radio />} label="Both" />
          <FormControlLabel value="1" control={<Radio />} label="Male" />
          <FormControlLabel value="2" control={<Radio />} label="Female" />
        </RadioGroup>

      </Box>



    </div>

  )
}


export default Filter