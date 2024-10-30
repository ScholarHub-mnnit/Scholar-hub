import axios from "axios";
import { baseUrl } from './baseUrl'

class ApiService{
    constructor(baseUrl) {
        this.api = axios.create({
          baseURL: baseUrl,
          timeout: 10000,
    });
    }

    async login(data) {
        try {
            const response=await this.api.post("login",data);
            console.log("authApi/login: ",response);
            return response?.data;
        } catch (error) {
            console.log("authApi/login: ",error);
            throw error;
        }
    }

    async signup(data) {
        try {
            const response=await this.api.post("signup",data);
            console.log("authApi/signup: ",response);
            return response?.status ? true : false;
        } catch (error) {
            console.log("authApi/signup: ",error);
            throw error;
        }
    }

}

const authService=new ApiService(baseUrl);

export default authService;