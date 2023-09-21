import { useState } from "react";
import { CATEGORIES } from "../utils/constants";
import supabase from "../supabase";

const Fact = ({ fact, setFacts }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVote = async (fieldName) => {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [fieldName]: fact[fieldName] + 1 })
      .eq("id", fact.id)
      .select(); // update the local facts arr for UI
    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  };

  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            (category) => category.name === fact.category
          ).color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
