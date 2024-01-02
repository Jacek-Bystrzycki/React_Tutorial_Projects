const url = 'https://course-api.com/react-tabs-project';
import { useState, useEffect } from 'react';
import JobInfo from './Components/JobInfo';
import BtnContainer from './Components/BtnContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonResp = await response.json();
      setData(jsonResp);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : (
        <div>
          <BtnContainer
            jobs={data}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          />
          <JobInfo job={data[activeItem]} />
        </div>
      )}
    </div>
  );
};
export default App;
