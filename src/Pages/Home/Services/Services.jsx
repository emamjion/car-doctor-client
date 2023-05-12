import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    }, [])
    
    
    return (
        <div>
            <div className='mt-6 text-center'>
                <h3 className='text-2xl text-[#FF3811] font-medium'>Service</h3>
                <h2 className='text-5xl my-5 font-bold'>Our Service Area</h2>
                <p>
                    The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
                </p>
            </div>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;