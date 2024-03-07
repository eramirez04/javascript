import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
    baseURL : 'http://127.0.0.1:8001/api',
})