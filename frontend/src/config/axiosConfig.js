import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});


// Request Interceptor for adding the token 
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor for handling global erroes
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401) {
            console.error('Unauthorized! Logging out...');
        }
        return Promise.reject(error);
    }
);

export default apiClient;