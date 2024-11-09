import { useSelector } from "react-redux";

const useTasks = () => {
  let task = useSelector((state) => state.task.task);
  const taskPending=task.filter((item) => item?.status === 'Pending');
  const taskOverdue=task.filter((item) => item?.status === 'OverDue');
  const taskCompleted=task.filter((item) => item?.status === 'Completed');
  const total=task.length;const totalData=[{label:"Pending",data:taskPending.length}, {label:"Overdue",data:taskOverdue.length},{label:"Completed",data:taskCompleted.length}];

  return {data: task ,total, totalData};
};

export default useTasks;


