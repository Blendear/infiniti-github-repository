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
import fotoDjamila from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/1.png";
import fotoLaOla from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import fotoMargos from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/3.png";
import fotoNaPiastach from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/4.png";
import fotoSFD from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/5.png";
import fotoSushiTu from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/6.png";
import fotoZaksa from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/7.png";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData = [
  {
    image: fotoDjamila,
  },
  {
    image: fotoLaOla,
  },
  {
    image: fotoMargos,
  },
  {
    image: fotoNaPiastach,
  },
  {
    image: fotoSFD,
  },
  {
    image: fotoSushiTu,
  },
  {
    image: fotoZaksa,
  },
];
