import { ReactElement } from 'react';
import { CustomCompProps } from '../App';

interface SectionTitleProps extends CustomCompProps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitleProps): ReactElement => {
  return (
    <div className="border-b  border-base-300 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};
export default SectionTitle;
