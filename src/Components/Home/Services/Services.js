import React from "react";
import fluoride from "../../../images/flourid.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/teeth.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import './Service.css'

const Services = () => {
  const serviceData = [
    {
      title: "Fluoride Treatment",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam quia obcaecati!",
      img: fluoride,
    },
    {
      title: "Cavity Filling",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam quia obcaecati!",
      img: cavity,
    },
    {
      title: "Teath Whitening",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquam quia obcaecati!",
      img: teeth,
    },

  ];
  return (
    <section className="services-container  mt-5   " >
      <div className="text-center mt-5">
        <h6 style={{ color: 'green' }} className="mt-5">OUR SERVICES</h6>
        <h2 className="mt-3">Services We Provide</h2>
      </div>

      <div className=" row d-flex justify-content-center mt-5 my-5 py-5">
        {
          serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
        }

      </div>
    </section>
  );
};

export default Services;
