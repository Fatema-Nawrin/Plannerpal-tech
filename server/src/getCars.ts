import { CarData, CarWithId } from "./types";

export const getAllCars = async (dbCars: Record<string, CarData>, search: string): Promise<CarWithId[]> => {
  // Convert car object to array with _id field
  const carsArray: CarWithId[] = Object.entries(dbCars).map(([_id, car]) => ({
    _id, ...car
  }));

  // If no search term or empty search, return all cars
  if (!search || search.trim() === "") {
    return carsArray;
  }
  // Split into terms so multiword searches such as "blue honda" can match
  const searchTerms = search.toLowerCase().trim().split(/\s+/)
  const filteredCarsArray = carsArray.filter((car) => {
    const searchFields = [car.make, car.model, car.colour, car.fuelType]
    return searchTerms.every(term => {
      // Check if it's a number
      const searchNumber = Number(term);
      const isNumber = !isNaN(searchNumber);

      const textMatch = searchFields.some(f => f.toLowerCase().includes(term))

      const numberMatch = isNumber && (
        car.age === searchNumber ||
        car.cost === searchNumber ||
        car.mileage === searchNumber
      );

      return textMatch || numberMatch;
    });
  });

  return filteredCarsArray
};


