import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="col-md-4 d-flex justify-content-center py-3 p-3">
      <div className=" card shadow-sm" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aspernatur illum ullam quasi repudiandae nam officia tempora nesciunt et quod quae, voluptatem perspiciatis exercitationem officiis repellat consequuntur vel accusantium.</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
          <img className="mx-3" src={img} alt="" width="60" />
          <div>
            <h6 className="text-primary">{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
