import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now().toString() });
    setTask({
      id: "",
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-gray-200 border shadow-black rounded-lg shadow-md mb-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New Task
        </h2>
        <div className="mb-4">
          <label className="block text-md text-left ml-2 font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md text-left ml-2 font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-md text-left ml-2 font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md text-left ml-2 font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm shadow-sm bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-1/2 bg-blue-500 text-white py-3 px-4 rounded-lg font-medium shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Add Task
        </button>
      </form>
    </>
  );
}

export default AddTaskForm;
