import axios from 'axios';

const KEY = "AIzaSyDbrvgWlm3TDyamLhqSP0HRA7AD6s8qm_U";

export default axios.create({
    baseURL: 'https://www.googleapis.com//youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});