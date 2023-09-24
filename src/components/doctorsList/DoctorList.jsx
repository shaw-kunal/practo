import React, { useContext, useEffect, useState } from 'react';
import "./doctorList.css";
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import { doctorArray } from '../../db/database';
import { Context } from '../../context/Context';

const DoctorList = () => {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { city, specialist, sort,fees,gender } = useContext(Context);
  const [filter, setfilter] = useState(true)


  useEffect(() => {
    // Check if both city and specialist are not null
    const filterArray = () => {

      setfilter(false)
      if (city === null && specialist === null) {
        setFilteredDoctors(doctorArray.slice(201, 250)); // Limit to the first 10 doctors as an example
      }
      else if (city !== null && specialist === null) {
        const filtered = doctorArray.filter(doctor => doctor.city === city);
        setFilteredDoctors(filtered);
      }
      else if (city === null && specialist !== null) {
        const filtered = doctorArray.filter(doctor => doctor.degree === specialist);
        setFilteredDoctors(filtered);
      }
      else {
        const filtered = doctorArray.filter(doctor => doctor.city == city && doctor.degree == specialist);
        setFilteredDoctors(filtered);
      }
      setfilter(true);
    }

    const sortResult = (sort) => {
      switch (sort) {
        case "1":
          // Sort by price - low to high
          setFilteredDoctors((prevDoctors) =>
            [...prevDoctors].sort((a, b) => parseFloat(a.fees) - parseFloat(b.fees))
          );
          break;
        case "2":
          // Sort by price - high to low
          setFilteredDoctors((prevDoctors) =>
            [...prevDoctors].sort((a, b) => parseFloat(b.fees) - parseFloat(a.fees))
          );
          break;
        case "3":
          // Sort by years of experience - low to high
          setFilteredDoctors((prevDoctors) =>
            [...prevDoctors].sort((a, b) => b.experience - a.experience)
          );
          break;
        case "4":
          // Sort by rating - high to low
          setFilteredDoctors((prevDoctors) =>
            [...prevDoctors].sort((a, b) => b.rating - a.rating)
          );
          break;
        default:
          // Default sorting (no sorting)
          break;
      }
    };

    const feesFilter = (fees) => {
      switch (fees) {
        case "1":
          // Filter the result which have fee = 0
          setFilteredDoctors((prevDoctors) =>
            prevDoctors.filter((doctor) => parseFloat(doctor.fees) === 0)
          );
          break;
        case "2":
          // Filter the result which have fee between 1-200
          setFilteredDoctors((prevDoctors) =>
            prevDoctors.filter(
              (doctor) => parseFloat(doctor.fees) >= 1 && parseFloat(doctor.fees) <= 200
            )
          );
          break;
        case "3":
          // Filter the result which have fee between 201 to 500
          setFilteredDoctors((prevDoctors) =>
            prevDoctors.filter(
              (doctor) => parseFloat(doctor.fees) >= 201 && parseFloat(doctor.fees) <= 500
            )
          );
          break;
        case "4":
          // Filter the result which have fee more than 500
          setFilteredDoctors((prevDoctors) =>
            prevDoctors.filter((doctor) => parseFloat(doctor.fees) > 500)
          );
          break;
        default:
          // Default filtering (no filtering)
          break;
      }
    };

    const genderFilter=(gender)=>{
      switch(gender){
        case "1":
          setFilteredDoctors((prevDoctors)=>
          prevDoctors.filter((doctor)=> doctor.gender==='Male'));
          break;

        case "2":
          setFilteredDoctors((prevDoctors)=>
          prevDoctors.filter((doctor)=>doctor.gender==='Female'))
          break;
        default:
          break;
      }
    }
    
    







    filterArray();
    sort != 0 && sortResult(sort);
    feesFilter(fees);
    genderFilter(gender)




  }, [city, specialist, sort,fees,gender]);
  // console.log(filteredDoctors);
  // console.log(city)
  // console.log(specialist)
  // // console.log(doctorArray)

  return (
    <div className='profileListContaier'>
      <div className='resultFound'>

        {(city || specialist) && `${filteredDoctors.length} results founds`}
      </div>
      <div className="heading">
      </div>
      {
        filter &&
        (
          filteredDoctors.length === 0 ? (<p>No doctors found.</p>) : (
            filteredDoctors.map((d, i) => <DoctorProfile key={i} doctor={d} />))
        )
      }
    </div>
  );
}

export default DoctorList;
