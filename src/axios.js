import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/solankijewellers-5472e/us-central1/api'

});
export default instance;