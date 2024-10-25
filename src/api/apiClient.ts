import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiRequest = async <T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any,
    options?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await apiClient({
            url,
            method,
            data,
            ...options,
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'An error occurred');
    }
};

export default apiClient;
