import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import Values from 'values.js';

type PropsType = {
  color: Values;
  index: number;
};

const SingleColor = ({ color, index }: PropsType): ReactElement => {
  const { hex, weight } = color;

  const lightFont: boolean = index > 10;

  const saveToClipboard = async (): Promise<void> => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`#${hex} saved to Clipboard`);
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
      }
    } else {
      toast.error('clipboard access not available');
    }
  };

  const content: ReactElement = (
    <article className={`color ${lightFont && 'color-light'}`} style={{ background: `#${hex}` }} onClick={saveToClipboard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );

  return content;
};
export default SingleColor;
