
import axios from 'axios';

const baseDomain = 'http://localhost:5000';
const baseUrl = `${baseDomain}/`;

export default axios.create({
    baseURL: baseUrl
});
