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
  imageAuthor?: string;
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
    imageAuthor: "",
  },
  {
    id: 2,
    name: "Ford Mustang",
    price: 48000,
    horsePower: 417,
    topSpeed: 302,
    nationality: "American",
    imageUrl: "mustang.jpeg",
    imageAuthor: "",
  },
];

export default Cars;

// const rootPath = __dirname + "../assets/camaro.jpeg";
