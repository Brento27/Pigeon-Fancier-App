import { createContext, useState } from 'react';
import axios from 'axios';

const PigeonContext = createContext();

const MONGODB_URL = process.env.MONGODB_URL;

export const PigeonProvider = ({ children }) => {
  const [pigeons, setPigeons] = useState([]);
  const [pigeon, setPigeon] = useState({});

  /**
   * GetPigeons() is an async function that uses axios to make a GET request to the server, and then
   * sets the state of the pigeons array to the response data.
   * @returns The pigeons array.
   */
  const getPigeons = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pigeons`);

      setPigeons(response.data);
      console.log(response.data);

      return pigeons;
    } catch (err) {
      console.log(err);
    }
  };

  const getSinglePigeon = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/pigeons/${id}`);

      setPigeon(response.data);
      console.log(pigeon);

      return pigeon;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PigeonContext.Provider
      value={{
        pigeons,
        pigeon,
        getPigeons,
        getSinglePigeon,
      }}
    >
      {children}
    </PigeonContext.Provider>
  );
};

export default PigeonContext;