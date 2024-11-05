import axios from "axios";
import { baseUrl } from './baseUrl'

class TaskService {
    constructor(baseUrl) {
        this.api = axios.create({
            baseURL: baseUrl + "task/",
            timeout: 10000,
            withCredentials: true,
        });
    }
    async fetchTasks() {
        try {
            const response = await axios.get('all');
            return response?.data?.tasks;
        }
        catch (error) {
            console.log('taskApi/fetchTasks:', error);
            throw error;
        }
    }
    async addTask(data) {
        console.log("Create the task")
        try {
            const response = await axios.post('add', data);
            return response?.status===201;
        }
        catch (error) {
            console.log('taskApi/addTask:', error);
            throw error;
        }
    }
    async updateTask(data) {
        try {
            const response = await axios.patch(`update/${data?._id || data?.id}`, data);
            return response?.data;//updated task
        }
        catch(error){
            console.log('taskApi/updateTask:',error);
            throw error;
        }
    }
    async deleteTask(data) {
        try {
            const response = await axios.delete(`delete/${data?._id || data?.id}`);
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