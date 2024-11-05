import axios from 'axios';
import { baseUrl } from './baseUrl';

<<<<<<< HEAD
class ApiService{
    constructor(baseUrl) {
        this.api = axios.create({
          baseURL: baseUrl+"auth/",
          timeout: 5000,
=======
class ApiService {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: `${baseUrl}api/auth`,
      timeout: 10000,
>>>>>>> 95fa5c9e1ef27656f6bda02f0f84d647fb23ba6c
    });
  }

  async login(data) {
    try {
      const response = await this.api.post('/login', data);
      console.log('authApi/login: ', response);
      return response?.data;
    } catch (error) {
      console.log('authApi/login: ', error);
      throw error;
    }
  }

<<<<<<< HEAD
    async signup(data) {
        try {
            const response=await this.api.post("signup",data);
            console.log("authApi/signup: ",response);
            return response?.status === 201;
        } catch (error) {
            console.log("authApi/signup: ",error);
            throw error;
        }
=======
  async signup(data) {
    try {
      const response = await this.api.post('/signup', data);
      console.log('authApi/signup: ', response);
      return response?.status ? true : false;
    } catch (error) {
      console.log('authApi/signup: ', error);
      throw error;
>>>>>>> 95fa5c9e1ef27656f6bda02f0f84d647fb23ba6c
    }
  }
}

const authService = new ApiService(baseUrl);

export default authService;
