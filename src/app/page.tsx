import CarMiniCooper2020 from "@/assets/images/mini-cooper-car-2020.svg";

import { CarTable } from "@/components/CarTable";

export default function Home() {
  const cars = [
    {
      carContent: {
        carName: "Mini Cooper 2020",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "11/07",
      isAvailable: true,
      rating: 5,
    },
    {
      carContent: {
        carName: "Ultra Cooper 2024",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "29/02",
      isAvailable: false,
      rating: 3,
    },
    {
      carContent: {
        carName: "Porsche 2022",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "25/12",
      isAvailable: true,
      rating: 4,
    },
    {
      carContent: {
        carName: "Fusca 2020",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "02/02",
      isAvailable: true,
      rating: 1,
    },
    {
      carContent: {
        carName: "HB20 2020",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "17/08",
      isAvailable: false,
      rating: 2,
    },
    {
      carContent: {
        carName: "Ferrari",
        carImage: CarMiniCooper2020,
      },
      nextReservation: "08/11",
      isAvailable: false,
      rating: 5,
    },
  ];

  return (
    <main className="p-6 rounded-lg">
      <CarTable.Root>
        <CarTable.Head>
          <CarTable.Row className="uppercase text-gray-500 font-bold">
            <th>Car</th>
            <th>Next Reservation</th>
            <th>Status</th>
            <th>Rating</th>
            <th className="block ml-auto w-max">Actions</th>
          </CarTable.Row>
        </CarTable.Head>

        <CarTable.Body>
          {cars.map(
            ({
              carContent: { carImage, carName },
              nextReservation,
              isAvailable,
              rating,
            }) => {
              return (
                <CarTable.Row>
                  <CarTable.Content carImage={carImage} carName={carName} />
                  <CarTable.NextReservation
                    nextReservationDate={nextReservation}
                  />
                  <CarTable.Availability isAvailable={isAvailable} />
                  <CarTable.Rating ratingStarsAmount={rating} />
                  <CarTable.Actions />
                </CarTable.Row>
              );
            }
          )}
        </CarTable.Body>
      </CarTable.Root>
    </main>
  );
}
