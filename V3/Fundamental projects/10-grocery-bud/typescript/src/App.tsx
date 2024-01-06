import { useEffect } from 'react';
import Form from './component/Form';
import { List } from './component/List';
import { useGroceryContext } from './hook/useGroceryContext';

function App() {
  const { state, loadGrocery } = useGroceryContext();
  useEffect(() => {
    loadGrocery();
  }, []);
  return (
    <main>
      <Form />
      {state.map((item) => {
        return <List key={item.id} item={item} />;
      })}
    </main>
  );
}

export default App;
