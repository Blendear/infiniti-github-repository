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
import foto1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto6 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import foto7 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData2 = [
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
  {
    image: foto5,
  },
  {
    image: foto6,
  },
  {
    image: foto7,
  },
];
