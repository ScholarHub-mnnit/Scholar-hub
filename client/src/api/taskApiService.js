import axios from "axios";
import { baseUrl } from './baseUrl'

class TaskService {
    constructor(baseUrl) {
        this.api = axios.create({
            baseURL: `${baseUrl}task/`,
            timeout: 10000,
            withCredentials: true,
        });
    }
    async fetchTasks() {
        try {
            const response = await this.api.get('all');
            console.log(response)
            return response?.data?.tasks;
        }
        catch (error) {
            console.log('taskApi/fetchTasks:', error);
            throw error;
        }
    }
    async addTask(data) {
        try {
            const response = await this.api.post('add', data);
            return response?.status===201;
        }
        catch (error) {
            console.log('taskApi/addTask:', error);
            throw error;
        }
    }
    async updateTask(data) {
        try {
            const response = await this.api.patch(`update/${data?._id || data?.id}`, data);
            return response?.data;//updated task
        }
        catch(error){
            console.log('taskApi/updateTask:',error);
            throw error;
        }
    }
    async deleteTask(data) {
        try {
            const response = await this.api.delete(`delete/${data?._id || data?.id}`);
            return response?.status===201;
        }
        catch(error){
            console.log('taskApi/deleteTask:',error);
            throw error;
        }
    }
}

const taskService = new TaskService(baseUrl);

export default taskService;