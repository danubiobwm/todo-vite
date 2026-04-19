import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);


  function prepareTask(){
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: "",
      state: TaskState.Creating,
    }]);
  }

  return {
    prepareTask
  };
}
