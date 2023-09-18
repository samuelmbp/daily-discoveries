import "./style.css";
import { useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";
import Header from "./components/Header";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm && <NewFactForm />}

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
};

export default App;
