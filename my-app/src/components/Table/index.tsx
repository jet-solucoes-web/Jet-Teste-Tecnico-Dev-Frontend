'use client';

import ICar from '@/interfaces/car';
import { useEffect, useState } from 'react'
import Car from '../Car';

export default function Table() {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api');

      if (response.ok) {
        const data = await response.json();
        setCars(data.cars);
      }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    })()
  }, []);

  return (
    <table className="min-w-full divide-y border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            CAR
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            NEXT RESERVATION
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            STATUS
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            RATING
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {
          cars && cars.map((car) => (
            <Car key={car.id} {...car} />
          ))
        }
      </tbody>
    </table>
  )
}