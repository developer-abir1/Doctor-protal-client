import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faPhone,
  faMapMarker,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infoData = [
    {
      title: "Opening Hours",
      description: "We are open 7 day",
      icon: faClock,
      background: "primary",
    },
    {
      title: "Vsit Our location",
      description: "Brooklyn , NY, United states",
      icon: faMapMarker,
      background: "dark",
    },
    {
      title: "Contact Us Now ",
      description: "+1568684678",
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section className="d-flex justify-content-center "  >
      <div className="w-75 row ">
        {
          infoData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
        }
      </div>
    </section>
  );
};

export default BusinessInfo;
