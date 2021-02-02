import React, { useState, useEffect } from 'react'
import { getIpAddress } from "../components/ipify"
import { RiArrowRightSLine } from 'react-icons/ri';

function Form ({setGeolocation}){

    const [input_ip_address, setInputAddress] = useState('');

    const [old_input_ip_address, setOldInputIpAddress] = useState('');

    const [preventClick, setPreventClick] = useState(false);

    useEffect(() => {
        
         (async function() {
            setInputAddress(await setGeolocationInfo())
            
         })();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        if(isIpAddressValid() && old_input_ip_address !== input_ip_address && preventClick === false) {
            setPreventClick(true);
            await setGeolocationInfo(input_ip_address);
            setOldInputIpAddress(input_ip_address);
            setPreventClick(false);
        }
    };

    const setGeolocationInfo = async (ip_address = '') => {
        const result = await getIpAddress(ip_address);
        if (result === false) {
            return;
        }
        const {as, ip, location, isp} = result;
        const {city, region, postalCode, timezone, lat, lng} = location;
        const LOCATION = `${city}, ${region} ${postalCode}`;
        const TIME_ZONE = `UTC ${timezone}`;
        setGeolocation({
            ip_address: ip,
            location: LOCATION,
            time_zone: TIME_ZONE,
            isp: !as ? isp : as.name,
            latitude: lat,
            longitude: lng
        });
        return ip;
    };
    function isIpAddressValid() {
        const IP_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (IP_ADDRESS_REGEX.test(input_ip_address)) {
            return true;
        }
        alert('Invalid IP Address');
        return false;
    };

    return (  
            <form className="mt-6 text-center" method="post" onSubmit={handleSubmit}>
                <label htmlFor="ip_address" className="hidden">IP Address tracker</label>
                <div className="input-container flex max-w-xs md:max-w-screen-sm m-auto justify-center items-center">
                    <input 
                        type="text"
                        id="ip_address"
                        placeholder="enter any IP address" 
                        className="text-sm p-2.5 w-full rounded-l-md"
                        value={input_ip_address}
                        onChange={e => setInputAddress(e.target.value)}/>
                    <button className="w-12 bg-black p-3.5 rounded-r-2xl text-white text-sm outline-none" type="submit">
                        <RiArrowRightSLine /></button>
                </div>
            </form>
    );
}

export default Form
