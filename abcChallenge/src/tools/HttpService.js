import axios from 'axios';
export const baseUrl = 'https://wookie.codesubmit.io/';


const httpService = {
    async httpPost(url, data) {
        const res = await axios.post(baseUrl + url, data);
        return await res;
    },

    async httpGet(url) {
        const res = await axios.get(baseUrl + url);
        return await res.data;
    },

    async httpPostJwt(url, data) {
        console.log(baseUrl + url, data)
        const AuthStr = 'Bearer Wookie2019';
        var headers = { 'Content-Type': 'application/json', 'Authorization': AuthStr }
        const res = await axios.post(baseUrl + url, data, { headers: headers });
        return res.data;
    },

    async httpGetJwt(url) {
        const AuthStr = 'Bearer ' + 'Wookie2019';
        var headers = { 'Content-Type': 'application/json', 'Authorization': AuthStr }
        const res = await axios.get(baseUrl + url, { headers: headers });
        return await res;
    },
};

export default httpService;