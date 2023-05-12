import React from "react";
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
                <img
                    src={person}
                    className="w-3/4 rounded-lg shadow-2xl"
                />
                <img
                    src={parts}
                    className="w-1/2 border-8 border-white absolute top-1/2 right-5 rounded-lg"
                />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-2xl font-bold text-[#FF3811]">About Us</h1>
                <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                <p className="py-5">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className="pb-8">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="px-3 rounded-md mr-4 py-3 bg-[#FF3811] text-white font-medium">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default About;
