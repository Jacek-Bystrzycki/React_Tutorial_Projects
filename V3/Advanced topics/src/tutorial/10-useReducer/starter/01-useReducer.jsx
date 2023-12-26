import { useReducer } from 'react';
import { data } from '../../../data';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: true,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  };
  const resetItems = () => {
    dispatch({ type: 'RESET' });
  };
  const clearItems = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => clearItems()}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => resetItems()}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
