import axios from 'axios';
import { ENDPOINT, } from '../constants';

const Axios = axios.create({
    baseURL: ENDPOINT,
});

export default Axios;