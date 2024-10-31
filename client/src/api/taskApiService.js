import axios from "axios";
import { baseUrl } from './baseUrl'

class TaskService{
    constructor(baseUrl) {
        this.api = axios.create({
          baseURL: baseUrl+"task/",
          timeout: 10000,
    });
    }
    async fetchTasks(){
        const response = await axios.get('all');
        return response?.data;
    }
}

const taskService=new TaskService(baseUrl);

export default taskService;