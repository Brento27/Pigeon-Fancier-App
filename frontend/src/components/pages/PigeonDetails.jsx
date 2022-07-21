import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GiFemale, GiMale } from 'react-icons/gi';
import { Lofts } from '../../data';
import PigeonContext from '../../context/pigeons/PigeonContext';

function PigeonDetails() {
  const [isHen, setIsHen] = useState(true);
  const [pigeonLoft, setPigeonLoft] = useState({});

  const { id } = useParams();

  const { getSinglePigeon, pigeon } = useContext(PigeonContext);

  useEffect(() => {
    getSinglePigeon(id);
    if (pigeon.sex === 'H') {
      return;
    } else {
      setIsHen(false);
    }
    setPigeonLoft(Lofts.find((e) => e.id == pigeon.loftId));
  }, [pigeonLoft]);

  return (
    <div className='flex flex-col w-full lg:flex-row justify-between'>
      <div className='grid flex-grow h-full card bg-base-300 rounded-box place-items-center mr-12'>
        <div className='card lg:card-side bg-base-100 shadow-xl my-12 w-4/5'>
          <figure>
            <img src={pigeon.img} alt={pigeon.colour} />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>
              {pigeon.union} {pigeon.letters} {pigeon.ringNo} {pigeon.year}{' '}
              {isHen ? (
                <GiFemale style={{ color: '#f00299' }} />
              ) : (
                <GiMale style={{ color: '#0259f0' }} />
              )}
            </h2>
            <h1 className='card-title'>{pigeon.name}</h1>
            <p>
              Strain: {pigeon.strain}
              <br />
              Description: {pigeon.desc}
            </p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Pigeon Stats</button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid flex-grow h-full card bg-base-300 rounded-box place-items-left'>
        <div className='card-body'>
          <h2 className='card-title font-black'>
            {/* Owned by {pigeonLoft.name} Hokke */}
          </h2>
          {/* <p className='font-black text-2xl'>{pigeonLoft.slogan}</p> */}
          <p className='font-semibold'>
            {/* Fancier Name: {pigeonLoft.fancier} */}
          </p>
          {/* <p>Racing Since: {pigeonLoft.registerYear}</p> */}
          {/* <p>Current Club: {pigeonLoft.club}</p> */}
          {/* <p>Email: {pigeonLoft.email}</p> */}
          {/* <p>Phone Number: {pigeonLoft.phone}</p> */}
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Contact Fancier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PigeonDetails;
