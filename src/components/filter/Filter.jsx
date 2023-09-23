import React, { useState } from 'react'
import "./filter.css"
import { Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
const Filter = () => {
  const [fee, setFee] = useState('')
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [sort, setSort] = useState('')

  const handlefeeChange = (event) => {
    setFee(event.target.value);
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // If the checkbox is checked, add the gender to the selectedGenders array; otherwise, remove it.
    if (checked) {
      setSelectedGenders([...selectedGenders, name]);
    } else {
      setSelectedGenders(selectedGenders.filter((gender) => gender !== name));
    }
  }

  const handleSortChange = (event) => {
    setSort(event.target.value);

  }





  console.log(selectedGenders)
  console.log(fee)
  console.log(sort)

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
          value={sort}
          onChange={handleSortChange}
        >
          <FormControlLabel value="low-to-high" control={<Radio />} label="Low to high" />
          <FormControlLabel value="high-to-low" control={<Radio />} label="High to Low" />
          <FormControlLabel value="YOE" control={<Radio />} label="Year of Experience" />
          <FormControlLabel value="Recommendation" control={<Radio />} label="Recommendation" />
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
          <FormControlLabel value="free" control={<Radio />} label="Free" space />
          <FormControlLabel value="1-200" control={<Radio />} label="1-200" />
          <FormControlLabel value="201-501" control={<Radio />} label="201-500" />
          <FormControlLabel value="501+" control={<Radio />} label="501" />
        </RadioGroup>
      </Box>


      <Box sx={{
        display:"flex",
        borderBottom:"1px solid #e4dddd",
        padding:"10px 0px"

      }}>
        <Typography variant="h6" width={100}>Gender :</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={selectedGenders.includes('male')} onChange={handleCheckboxChange} name="male" />}
            label="Male"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedGenders.includes('female')} onChange={handleCheckboxChange} name="female" />}
            label="Female"
          />

        </FormGroup>

      </Box>



    </div>

  )
}


export default Filter