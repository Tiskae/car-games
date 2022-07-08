interface Car {
  id: string | number;
  name: string;
  /** price in dollars */
  price: number;
  horsePower: number;
  /** top speed in km/h */
  topSpeed: number;
  /** Manufacturer country */
  nationality: string;
  imageUrl: string;
}

const Cars: Car[] = [
  {
    id: 1,
    name: "Chevrolet Camaro",
    price: 55000,
    horsePower: 450,
    topSpeed: 310,
    nationality: "American",
    imageUrl: "camaro.jpeg",
  },
];

export default Cars;

// const rootPath = __dirname + "../assets/camaro.jpeg";
