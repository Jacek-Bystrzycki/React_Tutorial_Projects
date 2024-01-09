import { ReactElement, useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useGroceryContext } from '../hook/useGroceryContext';
import { UseGroceryReducer } from '../context/GroceryContext';
import { setupBorder } from '../styledComponents/Utils';

const Form = () => {
  const { dispatch, REDUCER_ACTION, state }: UseGroceryReducer = useGroceryContext();
  const [value, setValue] = useState<string>('');

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (value) {
      dispatch({ type: REDUCER_ACTION.ADD, payload: value });
      setValue('');
    }
  };

  const handleOnClick = (): void => {
    dispatch({ type: REDUCER_ACTION.CLEAR });
    setValue('');
  };

  const title: ReactElement = (
    <div className="title-container">
      <h2>Items manager</h2>
    </div>
  );

  const clearButton: ReactElement = (
    <button className="btn btn-clear" onClick={handleOnClick}>
      clear
    </button>
  );

  const form: ReactElement = (
    <form onSubmit={handleSubmit}>
      <input className="form-input" value={value} onChange={handleOnChange} />
      <div className="btn-container">
        <button className="btn btn-submit" type="submit">
          add
        </button>
        {state.length > 0 && clearButton}
      </div>
    </form>
  );

  return (
    <Wrapper>
      {title}
      {form}
    </Wrapper>
  );
};
export default Form;

// ============== CSS ================
const Wrapper = styled.div`
  .title-container {
    text-align: center;
    padding-block: 0.5rem;
  }
  .form-input {
    display: block;
    width: 90%;
    margin-top: 1rem;
    margin-inline: auto;
    padding: 0.5rem;
    border-radius: 3px;
    border: ${setupBorder({ width: 1, color: 'black' })};
  }
  .btn-container {
    display: flex;
    justify-content: space-evenly;
    padding-block: 1.5rem;
  }
  .btn {
    padding: 0.5rem;
    width: 40%;
    border-radius: 3px;
  }
  .btn:hover {
    cursor: pointer;
    background: var(--clr-neutral-400);
  }
`;
