import React, { useContext, useEffect } from 'react';
import PigeonContext from '../../context/pigeons/PigeonContext';
import PigeonCard from '../shared/PigeonCard';

function Home() {
  const { getPigeons, pigeons } = useContext(PigeonContext);

  useEffect(() => {
    getPigeons();
  }, []);

  return (
    <div className='pt-10 mx-12 grid place-items-center xl:grid-cols-3 xl:mx-0 lg:grid-cols-2 lg:mx-6 md:grid-cols-1 sm:grid-cols-1 gap-5'>
      {pigeons.map((pigeon) => (
        <PigeonCard key={pigeon._id} pigeon={pigeon} />
      ))}
    </div>
  );
}

export default Home;
