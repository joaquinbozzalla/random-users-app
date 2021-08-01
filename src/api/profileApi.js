import Axios from './axios';
import { API_SEED, } from '../constants';

export const fetchProfiles = async (page, results) => {
    const result = await Axios.get(`?page=${page}&results=${results}&seed=${API_SEED}`);
    return result;
}