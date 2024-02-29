'use client';

import { useFetchData } from '@/hooks/useFetchData';
import Car from '../Car';

export default function Table() {
  const { data: cars, loading, error  } = useFetchData('/api');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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