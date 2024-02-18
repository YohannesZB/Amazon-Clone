import axios from "axios";

const axiosInstance = axios.create({

  
    baseURL: "http://127.0.0.1:5001/clone-408b8/us-central1",
    // 3- deployed version of amazon server on render.com
    // baseURL: "https://amazon-backend-deploy.onrender.com/"
});

export {axiosInstance};