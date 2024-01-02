import { ReactElement } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

type PropsType = {
  colors: Values[];
};

const ColorList = ({ colors }: PropsType): ReactElement => {
  const content: ReactElement = (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );

  return content;
};
export default ColorList;
