import React from "react";
import fluoride from "../../../images/flourid.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/teeth.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

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
    <section className="service-container mt-5 pt-5">
      <div className="text-center">
        <h4 className="text-brand mt-5 mt-5">Our Services</h4>
        <h2 className="p-3">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map(service => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
