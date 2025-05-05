import React from "react";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";
import TaskFilter from "../components/TaskFilter.jsx";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-6">
      <div className=" w-full max-w-2xl bg-white p-6 shadow-lg rounded-xl space-y-6 md:p-8">
        <TaskForm />
        <div className="pt-5">
          <TaskFilter />
        </div>
        <div className="pt-5">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Home;
