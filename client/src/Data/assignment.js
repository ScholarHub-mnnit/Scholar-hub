import { useSelector } from "react-redux";

const useAssignments = () => {
  let assignment = useSelector((state) => state.task.task);
  assignment = assignment.filter((item) => item?.tasktype === 'Assignment');
  const assignPending=assignment.filter((item) => item?.status === 'Pending');
  const assignOverdue=assignment.filter((item) => item?.status === 'OverDue');
  const assignCompleted=assignment.filter((item) => item?.status === 'Completed');
  const total=assignment.length;const totalData=[{label:"Pending",data:assignPending.length}, {label:"Overdue",data:assignOverdue.length},{label:"Completed",data:assignCompleted.length}];
  const keys = [
    "title",
    "status",
    "deadline",
  ]; // Static keys for the table

  return { keys, data: assignment ,total, totalData};
};

export default useAssignments;




// export const assignment={
//     keys:[
//         "courseId",
//         "title",
//         "dueDate",
//         "points"
//     ],
//     data: [
//         {
//             "id": 1,
//             "title": "Project Proposal",
//             "courseId": 1,
//             "dueDate": "2024-02-15",
//             "points": 100,
//             "description": "Submit a project proposal outlining your intended project for the course."
//         },
//         {
//             "id": 2,
//             "title": "HTML and CSS Assignment",
//             "courseId": 2,
//             "dueDate": "2024-03-01",
//             "points": 80,
//             "description": "Create a personal website using HTML and CSS."
//         },
//         {
//             "id": 3,
//             "title": "Data Analysis Report",
//             "courseId": 3,
//             "dueDate": "2024-02-22",
//             "points": 50,
//             "description": "Analyze a given dataset and write a report on your findings."
//         },
//         {
//             "id": 4,
//             "title": "Machine Learning Model",
//             "courseId": 4,
//             "dueDate": "2024-03-15",
//             "points": 100,
//             "description": "Develop a simple machine learning model and evaluate its performance."
//         },
//         {
//             "id": 5,
//             "title": "Marketing Strategy Presentation",
//             "courseId": 5,
//             "dueDate": "2024-02-28",
//             "points": 60,
//             "description": "Create and present a marketing strategy for a product of your choice."
//         }
//     ]
// }
