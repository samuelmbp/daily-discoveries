import { useState } from "react";
import { CATEGORIES } from "../utils/constants";
import { isValidHttpUrl } from "../utils/isValidHttpUrl";

const NewFactForm = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, source, category);

    if (text && isValidHttpUrl(source) && category && text.length <= 200) {
      const newFact = {
        id: Math.round(Math.random() * 1000_000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      setFacts((facts) => [newFact, ...facts]);

      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    }
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
};

export default NewFactForm;
