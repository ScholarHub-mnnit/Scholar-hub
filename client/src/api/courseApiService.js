import axios from "axios";
import { baseUrl } from './baseUrl'

class CourseService {
    constructor(baseUrl) {
        this.api = axios.create({
            baseURL: baseUrl + "course/",
            timeout: 10000,
            withCredentials: true,
        });
    }
    async fetchCourses() {
        try {
            const response = await axios.get('all');
            return response.data;//course'll receive
        }
        catch (error) {
            console.error('courseApi/fetchCourses:', error);
            throw error;
        }
    }
    async fetchOne(data) {
        try {
            const response = await axios.get(`/get/${data?._id || data?.id}`);
            return response.data;
        }
        catch (error) {
            console.error('courseApi/fetchOne:', error);
            throw error;
        }
    }
    async addCourse(data) {
        try {
            const response = await axios.post('add', data);
            return response.data;//userData'll receive
        }
        catch (error) {
            console.error('courseApi/addCourse:', error);
            throw error;
        }
    }
    async updateCourse(data) {
        try {
            const response = await axios.patch(`update/${data?._id || data?.id}`, data);
            return response.data;//updated course data
        }
        catch (error) {
            console.error('courseApi/updateCourse:', error);
            throw error;
        }
    }
    async deleteCourse(data) {
        try {
            const response = await axios.delete(`/delete/${data?._id || data?.id}`);
            return response?.data;//deleted data'll receive
        }
        catch (error) {
            console.error('courseApi/deleteCourse:', error);
            throw error;
        }
    }
    async deleteAll() {
        try {
            const response = await axios.delete('deleteall');
            return response?.data;// user data..
        }
        catch (error) {
            console.error('courseApi/deleteAll:', error);
        }
    }
}

const courseService = new CourseService(baseUrl);

export default courseService;