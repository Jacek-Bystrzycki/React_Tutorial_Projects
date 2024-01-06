import { ReactElement, useState, ChangeEvent, FormEvent } from 'react';
import { useGroceryContext } from '../hook/useGroceryContext';

const Form = () => {
  const { addGrocery, clearGrocery, state } = useGroceryContext();
  const [value, setValue] = useState<string>('');

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    if (value) {
      addGrocery(value);
      setValue('');
    }
  };

  const handleOnClick = (): void => {
    clearGrocery();
    setValue('');
  };

  const clearButton: ReactElement = (
    <button type="button" onClick={handleOnClick}>
      Clear
    </button>
  );

  const form: ReactElement = (
    <form onSubmit={handleSubmit}>
      <input onChange={handleOnChange} value={value}></input>
      <button type="submit">ADD</button>
      {state.length > 0 && clearButton}
    </form>
  );

  const content: ReactElement = <div className="form-container">{form}</div>;

  return content;
};
export default Form;
