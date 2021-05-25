import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/Aliza.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'





const Testimonials = () => {
          
    const TestimonialData =[
           {
            quote:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium?",
            name:'Wilson Harry',
            from: 'California',
            img: wilson,

           },
           {
            quote:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium?",
            name:'Ema Gomez',
            from: 'California',
            img: ema,

           },
           {
            quote:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, laudantium?",
            name:'Aliza Farari',
            from: 'California',
            img: aliza,

           }    
    ]

    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className=" text-uppercase text-brand" >Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="row card-deck mt-5 ">
                 {
                     TestimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonials;