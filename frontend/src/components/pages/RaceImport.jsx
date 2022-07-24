import React, { useState } from 'react';
import { parse } from 'papaparse';

function RaceImport() {
  const [highlighted, setHighlighted] = useState(false);
  const [pigeons, setPigeons] = useState([]);

  return (
    <div className='container'>
      <div>
        <h1 className='text-center text-4xl'>Race Import</h1>
        <div
          className={`p-6 my-2 mx-auto max-w-md border-2 ${
            highlighted
              ? 'border-lime-200 bg-gray-300 text-primary'
              : 'border-white-600'
          }`}
          onDragEnter={() => {
            setHighlighted(true);
          }}
          onDragLeave={() => {
            setHighlighted(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setHighlighted(false);

            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === 'text/csv')
              .forEach(async (file) => {
                const text = await file.text();
                const result = parse(text, { header: true });
                setPigeons((existing) => [...existing, ...result.data]);
              });
          }}
        >
          DROP HERE
        </div>
        <div className='flex justify-center'>
          <div className='overflow-x-auto'>
            <table className='<table table-zebra table-normal w-full'>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Loft</th>
                  <th>Letters</th>
                  <th>RingNo</th>
                  <th>Sex</th>
                  <th>Ship</th>
                  <th>Distance</th>
                  <th>Var</th>
                  <th>Clock Time</th>
                  <th>To Win</th>
                  <th>Velocity (m/m)</th>
                </tr>
              </thead>
              <tbody>
                {pigeons.map((pigeon) => (
                  <tr className='' key={pigeon.Pos}>
                    <td className=''>{pigeon.Pos}</td>
                    <td>{pigeon.Fancier}</td>
                    <td>{pigeon.Letters}</td>
                    <td>{pigeon.RingNo}</td>
                    <td>{pigeon.Sex}</td>
                    <td>{pigeon.Ship}</td>
                    <td>{pigeon.Distance}</td>
                    <td>{pigeon.Var}</td>
                    <td>{pigeon.Clock_Time}</td>
                    <td>{pigeon.To_Win}</td>
                    <td>{parseInt(pigeon.Velocity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceImport;
