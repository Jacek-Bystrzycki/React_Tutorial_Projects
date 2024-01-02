import { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';

type PropsType = {
  addColor: (color: string) => void;
};

const Form = ({ addColor }: PropsType): ReactElement => {
  const [color, setColor] = useState<string>('');

  const submitHandler = (ev: KeyboardEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    addColor(color);
  };
  const changeHandler = (ev: ChangeEvent<HTMLInputElement>): void => setColor(ev.target.value);

  const input: ReactElement = (
    <form className="color-form" onSubmit={submitHandler}>
      <input type="color" value={color} onChange={changeHandler} />
      <input type="text" value={color} onChange={changeHandler} placeholder="#f15025" />
      <button className="btn" type="submit" style={{ background: color }}>
        submit
      </button>
    </form>
  );

  const content: ReactElement = (
    <section className="container">
      <h4>color generator</h4>
      {input}
    </section>
  );

  return content;
};
export default Form;
