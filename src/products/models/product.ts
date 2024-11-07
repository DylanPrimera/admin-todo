export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "UUID-ABC-1",
    name: "White Running Sneaker",
    price: 15,
    rating: 5,
    image:
      "https://img.freepik.com/psd-gratis/venta-zapatos-publicacion-redes-sociales-o-diseno-plantilla-banner-cuadrado_505751-3736.jpg?t=st=1730995007~exp=1730998607~hmac=43acd657c64b4102655a22a77a6590ec8e899c32e5dcc5c9fd779aef8d9403f2&w=826",
  },
  {
    id: "UUID-ABC-2",
    name: "Red Running Sneaker",
    price: 25,
    rating: 3,
    image:
      "https://img.freepik.com/psd-gratis/venta-zapatos-publicacion-redes-sociales-o-diseno-plantilla-banner-cuadrado_505751-3608.jpg?t=st=1730995023~exp=1730998623~hmac=02846a4929d8e59b60643fb3a47afc6bf66d990bc98ecd90617a8199e55735f4&w=826",
  },
  {
    id: "UUID-ABC-3",
    name: "Work Boots",
    price: 36,
    rating: 2,
    image:
      "https://img.freepik.com/psd-gratis/venta-zapatos-publicacion-redes-sociales-o-diseno-plantilla-banner-cuadrado_505751-3729.jpg?t=st=1730995040~exp=1730998640~hmac=1debc4e4a71d36af42dfa4f3f22ec2bbf89f1e8bfe3f47961961154f078ada46&w=826",
  },
  {
    id: "UUID-ABC-4",
    name: "Spider-Man Running Sneaker",
    price: 45,
    rating: 5,
    image:
      "https://img.freepik.com/psd-gratis/venta-zapatos-publicacion-redes-sociales-o-diseno-plantilla-banner-cuadrado_505751-3607.jpg?t=st=1730995056~exp=1730998656~hmac=bc18cc410d9d27109403c686913f8b5dd10c490b28eefa44fec7a953dba75976&w=826",
  },
];
