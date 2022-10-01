import axios from 'axios';
import {Md5} from 'ts-md5';

const publicKey = '2a7c8f51c012c7175ddadaaf5f08e010';
const privateKey = 'f6f7156794e57c1796af7f292c60bfecc31abf5a';

const time = Number(new Date());

const hash = Md5.hashStr(time + privateKey + publicKey);

const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    },
});

export default api;