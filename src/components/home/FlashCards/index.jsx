import "../../../styles/index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FlashCard } from "../../shared/FlashCard";

export function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((questionObj) => (
        <FlashCard
          key={questionObj.id}
          questionObj={questionObj}
          isSelected={questionObj.id === selectedId}
          onClick={() => handleClick(questionObj.id)}
        />
      ))}
    </div>
  );
}
