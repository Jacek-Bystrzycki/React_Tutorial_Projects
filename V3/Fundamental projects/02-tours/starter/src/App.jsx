import { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const respData = await resp.json();
      setData(respData);
      setIsLoading(false);
      console.log(respData);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    setData(newTours);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <button onClick={() => fetchData(url)}>re-fetch</button>
          <Tours tours={data} rmv={removeTour} />
        </div>
      )}
    </div>
  );
};
export default App;
