import { useState } from 'react';
import data from './data.js';
import Question from './Components/Question.jsx';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const setActive = id !== activeId ? id : null;
    setActiveId(setActive);
  };

  return (
    <div>
      <h2>Accordion Starter</h2>;
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question}
            activeId={activeId}
            toggle={toggle}
          />
        );
      })}
    </div>
  );
};
export default App;
