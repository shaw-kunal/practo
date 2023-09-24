import React from 'react'
import "./doctorProfile.css"
import { ThumbUpAlt } from '@mui/icons-material'

const DoctorProfile = ({doctor}) => {
  const approval=  (doctor.rating/5)*100;



    return (
        <div className='profileConainer'>
            <div className="left">
                <img className='doctorImage' src="https://img.freepik.com/premium-photo/man-with-orange-button-is-standing-circle-with-orange-button_745528-2649.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div className="middle">
                <span className="name">{doctor.name}</span>
                <span className="specialist">{doctor.degree}</span>
                <span className='experience'>{doctor.experience} year of over all experience </span>
                <span className='city' >{`${doctor.city},${doctor.state}`}</span>
                <span className='fees dashed-border'> {  doctor.fees != 0 ? `$${doctor.fees} Consultation fee at clinic` : "Free Consultant"}</span>
                <div className="rating"> <ThumbUpAlt/> {' '}{ approval  < 85 ?approval+15:approval}%</div>
            </div>
            <div className="right">
                <button className='meetClinic'>Book Clinic Visit</button>
            </div>



        </div>
    )
}

export default DoctorProfile