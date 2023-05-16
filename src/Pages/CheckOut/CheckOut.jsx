import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title } = service;

    return (
    <div>
        <h1>Booked Service : {title}</h1>
        <form className="mt-12">
            <div id="main-div" className="bg-[#F3F3F3] p-24">
                <div className=" grid grid-cols-2 gap-6">
                    <div className="">
                        <input className="p-3 w-full rounded-lg" type="text" name="firstName" placeholder="First Name" />
                    </div>
                    <div>
                        <input className="p-3 w-full rounded-lg" type="text" name="LastName" placeholder="Last Name" />
                    </div>
                    <div>
                        <input className="p-3 w-full rounded-lg" type="text" name="phone" placeholder="Your Phone" />
                    </div>
                    <div>
                        <input className="p-3 w-full rounded-lg" type="email" name="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="mt-5">
                    <textarea className="w-full h-[250px] rounded-lg p-4 resize-none" placeholder="Your Message">

                    </textarea>
                </div>
                <div>
                    <input className="w-full mt-3 cursor-pointer border border-[#FF3811] font-medium text-[#ff3811] px-6 py-2 rounded" type="submit" value="Order Confirm" />
                </div>
            </div>
        </form>
    </div>
    );
};

export default CheckOut;
