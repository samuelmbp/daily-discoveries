import "./style.css";
import { useEffect, useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";
import Header from "./components/Header";
import supabase from "./supabase";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const getFacts = async () => {
      const { data: facts, error } = await supabase.from("facts").select("*");

      setFacts(facts);
    };

    getFacts();
  }, []);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}

      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
};

export default App;
