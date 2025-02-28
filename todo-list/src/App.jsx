import React from "react";
import { TodoProvider } from "./context/TodoContext.jsx";
import Home from "./components/Home.jsx";


const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <Home />
      </div>
    </TodoProvider>
  );
};

export default App;
