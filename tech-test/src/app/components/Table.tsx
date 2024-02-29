'use client'
import carPic from '../../../public/mini_coper.jpg';
import Image from 'next/image';
import { Rating } from '@mui/material';
import React, { SyntheticEvent, useState, useEffect } from 'react';
import actionsBtn from '../../../public/dots-vertical.svg';

const Table = () => {
  const [starValues, setStarValues] = useState<number[]>(() => {
    const storedStarValues = localStorage.getItem('starValues');

    return storedStarValues ? JSON.parse(storedStarValues) : [5, 5, 5, 5, 5, 5];
  });

  const handleChange = (index: number, event: SyntheticEvent<Element, Event>) => {
    const { target } = event;
    const value = Number((target as HTMLButtonElement).value);

    const newStarValues = [...starValues];
    newStarValues[index] = value;

    setStarValues(newStarValues);
  }

  useEffect(() => {
    localStorage.setItem('starValues', JSON.stringify(starValues));
  }, [starValues]);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              CAR
            </th>
            <th>
              NEXT RESERVATION
            </th>
            <th>
              STATUS
            </th>
            <th>
              RATING
            </th>
            <th>
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {
            (() => {
              const lines = [];
              for (let i = 0; i < 6; i += 1) {
                lines.push(
                  <tr key={ i }>
                    <td>
                      <Image
                        src={ carPic }
                        alt="Picture of the Mini Cooper 2020"
                        width={ 50 }
                      />
                      Mini Cooper 2020
                    </td>
                    <td>
                      Jul 6 - Jul 12
                    </td>
                    <td>
                      <button>Available</button>
                    </td>
                    <td>
                      <Rating
                        name={ `rating-${i}` }
                        value={ starValues[i] }
                        onChange={ (event) => handleChange(i, event) }
                      />
                    </td>
                    <td>
                      <div>
                        <Image
                          src={ actionsBtn }
                          alt="Actions button"
                        />
                      </div>
                    </td>
                  </tr>
                );
              }
              return lines;
            })()
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
