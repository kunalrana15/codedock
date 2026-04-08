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


export const getProjectTree = async ({ projectId }) => {
    try {
        const response = await apiClient.get(`/v1/projects/${projectId}/tree`);
        // console.log("RESPONSE IS:",response.data);      
        return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}