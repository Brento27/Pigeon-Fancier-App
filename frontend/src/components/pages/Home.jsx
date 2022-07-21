import React, { useContext, useEffect } from 'react';
import PigeonContext from '../../context/pigeons/PigeonContext';
import PigeonCard from '../shared/PigeonCard';

function Home() {
  const { getPigeons, pigeons } = useContext(PigeonContext);

  useEffect(() => {
    getPigeons();
  }, []);

  return (
    <div className='pt-10 ml-12 grid grid-cols-3 gap-5'>
      {pigeons.map((pigeon) => (
        <PigeonCard key={pigeon._id} pigeon={pigeon} />
      ))}
    </div>
  );
}

export default Home;
