import "./style.css";
import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* TODO: Create header component */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>Daily Discoveries</h1>
        </div>

        <button
          className="btn btn-large btn-open"
          onClick={() => setShowForm((showForm) => !showForm)}
        >
          Share a fact
        </button>
      </header>

      {showForm && <NewFactForm />}

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
};

export default App;
