import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PigeonCard({ pigeon }) {
  const [image, setImage] = useState('');
  useEffect(() => {
    switch (pigeon.colour) {
      case 'BB':
        setImage(
          'http://kippenjungle.nl/layeredimage.php?ext=GIF&flip=Y&pic=pigeon/blackbar-blue.GIF'
        );
        break;
      default:
        setImage(
          'http://kippenjungle.nl/layeredimage.php?ext=GIF&flip=Y&pic=pigeon/blackbar-blue.GIF'
        );
        break;
    }
  });
  return (
    <div className='card w-96 bg-base-100 shadow-xl pt-8 flex justify-between'>
      <figure>
        <img className='rounded-lg' src={image} alt={pigeon.colour} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {pigeon.ringNo} {pigeon.letters} {pigeon.year}
        </h2>
        <p>{pigeon.desc}</p>
        <p>Points: {pigeon.points}</p>
        <div className='card-actions justify-end'>
          <Link to={`/my-pigeons/${pigeon._id}`}>
            <button className='btn btn-primary'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PigeonCard;
