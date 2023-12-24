import { useEffect } from 'react';
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  const fetchData = async () => {
    try {
      const resp = await axios.get(url);
      const data = resp.data;
      console.log(data);
    } catch (err) {
      console.log(err.response);
    };
  }; 

  useEffect(() => {
    // fetchData();
    axios.get(url).then(resp => {
      const data = resp.data;
      console.log(data);
    }).catch(err => {
      console.log(err.response);
    });
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
