import { ReactElement, useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = (): ReactElement => {
  const [colors, setColors] = useState<Values[]>(new Values('#f15025').all(10));

  const addColor = (color: string): void => {
    try {
      setColors(new Values(color).all(10));
      toast.success<string>('Success');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      // const toastError = error as Error;
      // toast.error(toastError.message);
      console.log(error);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
