import React from 'react'
import "./doctorList.css"
import DoctorProfile from '../DoctorProfile/DoctorProfile'
import { doctorArray } from '../../db/database'
// import doctorArray from "./../../db/database.js"


const DoctorList = () => {
  return (
    <div className='profileListContaier'>
      {
        doctorArray.map(d => (<DoctorProfile doctor={d} />))
      }




    </div>
  )
}

export default DoctorList