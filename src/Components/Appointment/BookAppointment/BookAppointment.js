import React from 'react';
import BookingCard from '../BookingCard/BookingCard';


const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthondtics',
        visitingHour: '8:00AM - 9:00AM',
        TotalSpase: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05AM - 11:30AM',
        TotalSpase: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00AM - 6:30AM',
        TotalSpase: 11
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00AM - 8:30AM',
        TotalSpase: 15
    }, {
        id: 5,
        subject: 'Teeth Orthondtics',
        visitingHour: '8:00AM - 9:00AM',
        TotalSpase: 10
    },
    {
        id: 6,
        subject: 'Teeth Dentistry',
        visitingHour: '8:00AM - 9:00AM',
        TotalSpase: 10
    }
]



const BookAppointment = ({ date }) => {
    return (
        <section className="bookingAppointment container mt-5">
            <h1 className="text-center text-brand  mb-5">Available Appointment on {date.toDateString()} </h1>
            <div className="row  ">
                {

                    bookingData.map(booking => <BookingCard booking={booking} key={booking.id} date={date}></BookingCard>)

                }
            </div>
        </section>
    );
};

export default BookAppointment;