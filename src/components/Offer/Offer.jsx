import React from 'react'
import "./offer.css"
import { Card, CardContent, CardMedia, Typography } from '@mui/material'



const Offer = () => {
    return (

        <div className='offerContainer'>
            <img className='offerimg' src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="" />

            <div className='DoctorContainer'>
                <Card sx={{ maxWidth: 200, height: 300, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 180, backgroundColor: "#5FD7DD" }}
                        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Find Doctor Near You
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Confirmed appointments
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 200, height: 300, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 180, backgroundColor: "#BCCEFB" }}
                        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Instant Video Consultation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Connect within 60 sec
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 200, height: 300, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 180, backgroundColor: "#C8DFDF" }}
                        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Medicines
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Essentials at your doorstep
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 200, height: 300, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 180, backgroundColor: "#BCCEFB" }}
                        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lab Tests
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sample Pickup at your home
                        </Typography>
                    </CardContent>
                </Card>



                <Card sx={{ maxWidth: 200, height: 300, borderRadius: 4 }}>
                    <CardMedia
                        sx={{ height: 180, backgroundColor: "#C6BEEE" }}
                        image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Surgeries
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Safe and trusted Surgery center
                        </Typography>
                    </CardContent>
                </Card>


            </div>
        </div>


    )
}

export default Offer