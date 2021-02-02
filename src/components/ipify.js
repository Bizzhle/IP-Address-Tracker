import axios from 'axios';

const API_KEY = 'at_cxHkPcxoe7UDhN5rtQTNQYIhnYY5Q';

/**
 * Get Ip Address Info on Ipify Server.
 * @param {*} ip_address
 * @return mixed (bool || obj)
 */

const getIpAddress = async function (ip_address = '') {
    try {
        const { data } = await axios.get('https://geo.ipify.org/api/v1', {
            params: {
                apiKey: API_KEY,
                ipAddress: ip_address
            },
        });
        return data;
    } catch (error) {
        alert("Something went wrong!");
        return false;
    }
};

export { getIpAddress }