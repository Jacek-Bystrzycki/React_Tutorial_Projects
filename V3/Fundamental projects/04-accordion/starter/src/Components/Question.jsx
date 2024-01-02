import { useState } from 'react';

const Question = ({ question, activeId, toggle }) => {
  const isActive = activeId === question.id;

  return (
    <div>
      <h3>{question.title}</h3>
      {isActive ? (
        <div>
          <button onClick={() => toggle(question.id)}>hide answear</button>
        </div>
      ) : (
        <div>
          <button onClick={() => toggle(question.id)}>show answear</button>
        </div>
      )}
      {isActive && <p>{question.info}</p>}
    </div>
  );
};
export default Question;
