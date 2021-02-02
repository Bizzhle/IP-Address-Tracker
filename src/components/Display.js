import React from 'react'

export default function Display({geolocation}) {

    const {ip_address, location, time_zone, isp} = geolocation;

    const DISPLAY_DETAILS = {
        'IP ADDRESS': ip_address,
        'LOCATION': location,
        'TIMEZONE': time_zone,
        'ISP': isp
    };

    const display_names = Object.keys(DISPLAY_DETAILS).map((key) => {
        return (
            <div className="" key={key}>
                <h2 className="text-xs font-extralight text-gray-500 mb-1 tracking-wider">{key}</h2>
                <p className="font-bold text-black text-lg ">{DISPLAY_DETAILS[key]}</p>
            </div>
        );
    })

    return (
        <div className="absolute z-40 top-36 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row font-rubik 
            w-full   max-w-xs md:max-w-screen-sm 200 p-6 bg-white rounded items-center md:justify-around text-center">
            {display_names}
        </div>
    )
}
