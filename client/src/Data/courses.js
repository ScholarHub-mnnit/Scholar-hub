import { useSelector } from "react-redux";

const useCourses = () => {
    const courses = useSelector((state) => state.course.course);
    const keys = ["name", "coursecode", "credit"]; // Static keys for the table
  
    return { keys, data: courses };
  };
  
  export default useCourses;


  
// export const courses={
//     keys:[
//         "name",
//         "coursecode",
//         // "instructor",
//         "credit",
//     ],

//     data: [
//         {
//             "id": 1,
//             "name": "Introduction to Computer Science",
//             "coursecode": "CS101",
//             "duration": "12 weeks",
//             "instructor": "Dr. Alice Smith",
//             "level": "Beginner",
//             "credit": 3,
//             "description": "An introductory course on computer science concepts and programming."
//         },
//         {
//             "id": 2,
//             "name": "Advanced Web Development",
//             "coursecode": "CS102",
//             "duration": "8 weeks",
//             "instructor": "Prof. John Doe",
//             "level": "Advanced",
//             "credit": 4,
//             "description": "A comprehensive course on modern web development techniques."
//         },
//         {
//             "id": 3,
//             "name": "Data Science Fundamentals",
//             "coursecode": "DS201",
//             "duration": "10 weeks",
//             "instructor": "Dr. Emily Johnson",
//             "level": "Intermediate",
//             "credit": 3,
//             "description": "Learn the basics of data science, including data analysis and visualization."
//         },
//         {
//             "id": 4,
//             "name": "Machine Learning Basics",
//             "coursecode": "ML201",
//             "duration": "14 weeks",
//             "instructor": "Dr. Michael Brown",
//             "level": "Intermediate",
//             "credit": 4,
//             "description": "An overview of machine learning techniques and applications."
//         },
//         {
//             "id": 5,
//             "name": "Digital Marketing Strategies",
//             "coursecode": "DMS01",
//             "duration": "6 weeks",
//             "instructor": "Ms. Sarah Williams",
//             "level": "Beginner",
//             "credit": 2,
//             "description": "Explore the fundamentals of digital marketing and social media strategies."
//         }
//     ]
// }
