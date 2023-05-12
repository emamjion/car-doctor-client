import React from "react";

const ServiceCard = ({service}) => {
    const { img, price, title } = service;
    
    return (
        <div className="card w-full h-[345px] bg-base-100 border-2 p-6">
            <figure>
                <img
                    src={img}
                    alt="service"
                />
            </figure>
            <div className="mt-5">
                <h2 className="card-title font-bold text-2xl">
                    {title}
                </h2>
                <div className="flex mt-3 items-center justify-between">
                    <p className="text-xl text-[#FF3811] font-semibold">Price : ${price}</p>
                    <span>Button</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
