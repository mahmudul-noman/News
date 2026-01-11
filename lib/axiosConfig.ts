// src/lib/axios.ts
import Axios from "axios";
import { BASE_URL } from "@/baseUrl";

// Create a dedicated Axios instance
const axios = Axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;
