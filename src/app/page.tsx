"use client";

import CarMiniCooper2020 from "@/assets/images/mini-cooper-car-2020.jpeg";

import { CarTable } from "@/components/CarTable";
import { useWindowSize } from "@/hooks/useWindowsSize";

export default function Home() {
  const { width } = useWindowSize();

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
    <main className="p-4 md:p-6 rounded-lg">
      <CarTable.Root>
        {width >= 768 && (
          <CarTable.Head>
            <CarTable.Row className="uppercase text-gray-500 font-bold">
              <th>Car</th>
              <th>Next Reservation</th>
              <th>Status</th>
              <th>Rating</th>
              <th className="text-right">Actions</th>
            </CarTable.Row>
          </CarTable.Head>
        )}

        <CarTable.Body>
          {cars.map(
            (
              {
                carContent: { carImage, carName },
                nextReservation,
                isAvailable,
                rating,
              },
              index
            ) => {
              return (
                <CarTable.Row key={index}>
                  {width < 768 ? (
                    <>
                      <CarTable.Data className="absolute top-0 left-0">
                        <CarTable.Availability isAvailable={isAvailable} />
                      </CarTable.Data>

                      <CarTable.Data className="md:py-0">
                        <CarTable.Content carImage={carImage} carName={carName}>
                          <CarTable.NextReservation
                            nextReservationDate={nextReservation}
                            isMobileVersion={width < 768}
                          />

                          <CarTable.Rating ratingStarsAmount={rating} />
                        </CarTable.Content>
                      </CarTable.Data>
                    </>
                  ) : (
                    <>
                      <CarTable.Data className="md:py-0">
                        <CarTable.Content
                          carImage={carImage}
                          carName={carName}
                        />
                      </CarTable.Data>

                      <CarTable.Data>
                        <CarTable.NextReservation
                          nextReservationDate={nextReservation}
                          isMobileVersion={width < 768}
                        />
                      </CarTable.Data>

                      <CarTable.Data>
                        <CarTable.Availability isAvailable={isAvailable} />
                      </CarTable.Data>

                      <CarTable.Data>
                        <CarTable.Rating ratingStarsAmount={rating} />
                      </CarTable.Data>
                    </>
                  )}

                  <CarTable.Data className="absolute right-0 md:relative">
                    <CarTable.Actions />
                  </CarTable.Data>
                </CarTable.Row>
              );
            }
          )}
        </CarTable.Body>
      </CarTable.Root>
    </main>
  );
}
