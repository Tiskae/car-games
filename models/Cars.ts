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
    imageUrl:
      "https://media.istockphoto.com/photos/chevrolet-camaro-picture-id1198530686?k=20&m=1198530686&s=170667a&w=0&h=T_0SBBB07mwOV40NiGe8nK9x0bRbUZTHeQkuJqJejak=",
    imageAuthor: "",
  },
  {
    id: 2,
    name: "Ford Mustang",
    price: 48000,
    horsePower: 417,
    topSpeed: 302,
    nationality: "American",
    imageUrl:
      "https://pictures.topspeed.com/IMG/crop/202205/ford-mustang-gtt-by--1_800x0w.jpg",
    imageAuthor: "",
  },
  {
    id: 3,
    name: "Bugatti Chiron Sport",
    price: 3500000,
    horsePower: 1500,
    topSpeed: 492,
    nationality: "German",
    imageUrl:
      "https://cdn.motor1.com/images/mgl/QE3q0/s1/2021-bugatti-chiron-super-sport-300.jpg",
    imageAuthor: "",
  },
  {
    id: 4,
    name: "Pagani Zonda",
    price: 2000000,
    horsePower: 1100,
    topSpeed: 408,
    nationality: "Italian",
    imageUrl:
      "https://i.pinimg.com/736x/bc/4a/a2/bc4aa2b7ed53024b72932516d7091d1b--pagani-zonda-roadster.jpg",
    imageAuthor: "",
  },
];

export default Cars;

// const rootPath = __dirname + "../assets/camaro.jpeg";
