//
//
//~~ A.  Array of objects of foty
//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
//              Hook1 - Niech funkcja dodaje objecty i properties. Pryda sie przy dziesiątkach zdjęć.

//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
import foto1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/minus1.png";
import foto2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/0.png";
import foto3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/1.png";
import foto4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/2.png";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData = [
  {
    image: foto1,
  },
  {
    image: foto2,
  },
  {
    image: foto3,
  },
  {
    image: foto4,
  },
];
