import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const { img, price, title } = service;
    
    return (
        <div>
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
                        <span className="text-[#FF3811]">
                            < FaArrowRight />
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;
