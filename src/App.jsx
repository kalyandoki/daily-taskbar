import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="items-center text-center min-h-screen p-4 bg-green-100">
      <div className=" max-w-3xl mx-auto">
        <h1 className="border shadow-sm bg-pink-100 p-2 rounded-lg text-2xl font-bold mb-4 ">
          Daily Tasks Manager
        </h1>
        <AddTaskForm addTask={addTask} />
        <TaskTable
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
