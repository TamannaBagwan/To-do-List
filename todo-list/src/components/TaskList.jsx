import React from "react";
import { useTodo } from "../context/TodoContext.jsx";

const TaskList = () => {
  const { tasks, toggleTask, editTask, deleteTask, filter } = useTodo();
  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="p-4 bg-white w-full">
      <h3 className="text-center text-sm md:text-base font-medium text-gray-700 mb-4">
        ✅ Completed:{" "}
        <span className="text-green-600">
          {tasks.filter((t) => t.completed).length}
        </span>{" "}
        / ⏳ Pending:{" "}
        <span className="text-red-600">
          {tasks.filter((t) => !t.completed).length}
        </span>
      </h3>

      {sortedTasks.length ? (
        <ul className="space-y-3">
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 w-full">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5  accent-blue-500 cursor-pointer"
                />
                <div className="flex-1 m-3">
                  <span
                    className={`text-lg font-semibold ${
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </span>
                  <p className="text-md text-gray-500 mt-1 mb-2">{task.description}</p>
                  {task.dueDate && (
                    <p className="text-sm text-gray-600">
                      📅 Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => editTask(task)}
                  className="text-yellow-500 hover:text-yellow-600 text-lg"
                  aria-label="Edit Task"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 text-lg"
                  aria-label="Delete Task"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
