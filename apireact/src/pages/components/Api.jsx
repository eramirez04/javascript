import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
    baseURL : 'http://127.0.0.1:8001/api',

    // url de api para el sena, puerto 8000
    //     baseURL : 'http://127.0.0.1:8000/api',
})