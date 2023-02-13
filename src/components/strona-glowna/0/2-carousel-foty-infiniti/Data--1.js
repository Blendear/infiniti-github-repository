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
import crossfitBox1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/crossfit-box/crossfit-box-1.png";

import kuzniaTytanowPierwsza1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-1/duze-ciezary-pierwsze-1.png";
import kuzniaTytanowPierwsza2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-1/duze-ciezary-pierwsze-2.png";
import kuzniaTytanowPierwsza3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-1/duze-ciezary-pierwsze-3.png";

import kuzniaTytanowDruga1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-2/duze-ciezary-3.png";
import kuzniaTytanowDruga2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-2/duze-ciezary-4.png";
import kuzniaTytanowDruga3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-2/duze-ciezary-5.png";
import kuzniaTytanowDruga4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-2/duze-ciezary-6.png";
import kuzniaTytanowDruga5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/kuznia-tytanow-2/duze-ciezary-7.png";

import mma1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/mma/mma-0.png";
import mma2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/mma/mma-1.png";
import mma3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/mma/mma-2.png";
import mma4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/mma/mma-3.png";
import mma5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/mma/mma-4.png";

import sauna1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/sauna/sauna-1.png";

import szatniaDamska1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/szatnia-damska/szatnia-damska-1.png";

import szatniaMeska1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/.minus-1/szatnia-meska/szatnia-meska-1.png";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselDataMinus1 = [
  {
    nazwaMiejsca: "crossfit-box",
    fotyTegoMiejsca: [crossfitBox1],
  },

  {
    nazwaMiejsca: "kuznia-tytanow-1",
    fotyTegoMiejsca: [
      kuzniaTytanowPierwsza1,
      kuzniaTytanowPierwsza2,
      kuzniaTytanowPierwsza3,
    ],
  },
  {
    nazwaMiejsca: "kuznia-tytanow-2",
    fotyTegoMiejsca: [
      kuzniaTytanowDruga1,
      kuzniaTytanowDruga2,
      kuzniaTytanowDruga3,
      kuzniaTytanowDruga4,
      kuzniaTytanowDruga5,
    ],
  },
  {
    nazwaMiejsca: "mma",
    fotyTegoMiejsca: [mma1, mma2, mma3, mma4, mma5],
  },
  {
    nazwaMiejsca: "szatnia-damska",
    fotyTegoMiejsca: [szatniaDamska1],
  },
  {
    nazwaMiejsca: "szatnia-meska",
    fotyTegoMiejsca: [szatniaMeska1],
  },
];
