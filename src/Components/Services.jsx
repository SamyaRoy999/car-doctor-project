import React from "react";
import { servicesData } from "../lib/servicesData";
import ServiceCard from "./shared/ServiceCard";
const Services = () => {
  return (
    <div className="px-8">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Services Section
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {servicesData.map((item, ind) => (
          <ServiceCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
