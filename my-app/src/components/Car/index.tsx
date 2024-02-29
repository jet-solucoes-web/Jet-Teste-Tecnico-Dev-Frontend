'use client';

import ICar from '@/interfaces/car';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder'; 
import Image from 'next/image';

import './car.css';

export default function Car(car: ICar) {
  return (
    <tr className='border-b border-gray-200'>
      <td className="px-6 py-4 whitespace-no-wrap flex gap-2 items-center custom-name-styles">
        <Image src={car.imageUrl} alt='Image car' width={48.96} height={46} />
        {' '}
        {car.name}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap custom-styles">
        {car.reservation}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <span className={car.status === 'Avaliable' ? 'custom-avaliable-styles' : 'custom-not-avaliable'}>
          {car.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <Box component="fieldset" borderColor="transparent">
          <Rating
            name="read-only"
            value={car.rating}
            readOnly
            precision={0.5}
            icon={<StarIcon style={{ color: 'black' }} />}
            emptyIcon={<StarBorderIcon style={{ color: 'gray' }} />} />
        </Box>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap custom-action-styles">
        <Image src="/dots-vertical.png" alt="image vertical" width={24} height={24} />
      </td>
    </tr>
  )
}