import axios from "axios";
import apiClient from "../config/axiosConfig.js";

export const createProjectApi = async () => {
    try {
        const response = await apiClient.post('/v1/projects');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}