import { useState, useTransition, Suspense, lazy } from 'react';
// import SlowComponent from '../../starter/04-react-18/SlowComponent';
const SlowComponent = lazy(() =>
  import('../../starter/04-react-18/SlowComponent')
);
const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h3>Loading...</h3>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}
      <button className="btn" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && (
        <Suspense fallback={<h3>Loading...</h3>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
