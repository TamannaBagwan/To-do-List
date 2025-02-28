
import React from "react";
import { useTodo } from "../context/TodoContext.jsx";

const TaskFilter = () => {
  const { filter, setFilter } = useTodo();

  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-3 px-4">
      {["all", "completed", "pending"].map((status) => (
        <button
          key={status}
          className={`w-full sm:w-auto px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition duration-300 ease-in-out shadow-md 
            ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          onClick={() => setFilter(status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
