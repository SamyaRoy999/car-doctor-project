import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/banner/2.jpg";
const ServiceCard = ({ item }) => {
  const { description, img, price, title } = item || {};

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          src={"/assets/images/banner/2.jpg"}
          height={384}
          width={384}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description?.slice(0, 50)}...</p>
        <p className="font-semibold text-primary">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Price: ${price}</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
