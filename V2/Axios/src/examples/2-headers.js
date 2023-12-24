import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const header = {
      headers:{
        Accept: "application/json"
      }
    };

  const fetchDadJoke = () => {
      axios.get(url, header).then(resp => {
        const data = resp.data.joke;
        setJoke(data);
      }).catch(err => console.log(err.response));
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
