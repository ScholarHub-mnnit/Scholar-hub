import { useSelector } from "react-redux";

const useGoals = () => {
  let goals = useSelector((state) => state.task.task);
  goals = goals.filter((item) => item?.setgoal);
  const keys = [
    "title",
    "goaltype",
    "status",
  ]; // Static keys for the table

  return goals;
};

export default useGoals;