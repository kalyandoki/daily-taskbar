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
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white rounded shadow">
      <div className="mb-2">
        <label className="block text-sm font-bold">Title</label>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
