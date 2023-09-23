import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./search.css"
import SearchBy from '../../components/SearchBy/SearchBy'
import Filter from '../../components/filter/Filter'
import DoctorProfile from '../../components/DoctorProfile/DoctorProfile'
import DoctorList from '../../components/doctorsList/DoctorList'

const Search = () => {
  return (
    <div>
        <Navbar/>
          <div className='Container'>
            <Filter/>
            <div className='innerContainer'>
              <SearchBy/>
              <DoctorList/>


            </div>
          </div>
        
    </div>
  )
}

export default Search