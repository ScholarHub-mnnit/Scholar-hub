import axios from "axios";
import { baseUrl } from './baseUrl'

class CourseService{
    constructor(baseUrl) {
        this.api = axios.create({
          baseURL: baseUrl+"course/",
          timeout: 10000,
    });
    }
    async fetchCourses(){
        const response = await axios.get('all');
        return response?.data;
    }
}

const courseService=new CourseService(baseUrl);

export default courseService;