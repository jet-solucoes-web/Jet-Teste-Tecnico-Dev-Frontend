import ICar from "@/interfaces/car";
import Image from "next/image";
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './mobile-car.css';

export default function MobileCar(car: ICar) {
  return (
    <section className="card-car">
      <div>
        <Image src={car.imageUrl} alt='Image car' width={85} height={85} />
      </div>
      <div className="description-car">
        <h1 className="title-car">{car.name}</h1>
        <p className="reservetion-car">
          Next reservetion:
          {' '}
          {car.reservation}
        </p>
        <Box component="fieldset" borderColor="transparent">
          <Rating
            name="read-only"
            value={car.rating}
            readOnly
            precision={0.5}
            icon={<StarIcon style={{ color: 'black' }} />}
            emptyIcon={<StarBorderIcon style={{ color: 'gray' }} />} />
        </Box>
      </div>
      <div>
        <Image
          src="/dots-vertical.png"
          alt="image vertical"
          width={24}
          height={24}
          className="icon-card"
        />
      </div>
    </section>
  )
}