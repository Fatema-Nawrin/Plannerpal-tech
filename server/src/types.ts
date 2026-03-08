export interface CarData {
    make: string,
    model: string,
    age: number,
    mileage: number,
    colour: string,
    description: string,
    cost: number,
    fuelType: string,
    damage: string | null,
}

export interface CarWithId extends CarData {
    _id: string;
}