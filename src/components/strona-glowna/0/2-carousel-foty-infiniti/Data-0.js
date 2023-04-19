//
//
//~~ A.  Array of objects of foty
//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
//

//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
// import foto1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/1.png";
// import foto2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/1.png";
// import foto4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/1.png";
// import foto6 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";

import fizjoterapiaPierwsza1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/fizjoterapia-1/fizjoterapia-jeden-1.png";
import fizjoterapiaPierwsza2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/fizjoterapia-1/fizjoterapia-jeden-2.png";
import fizjoterapiaPierwsza3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/fizjoterapia-1/fizjoterapia-jeden-3.png";
import fizjoterapiaPierwsza4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/fizjoterapia-1/fizjoterapia-jeden-4.png";
import fizjoterapiaPierwsza5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/fizjoterapia-1/fizjoterapia-jeden-5.png";

import recepcja1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/recepcja/recepcja-1.png";

import restauracja1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/restauracja/restauracja-1.png";
import restauracja2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/restauracja/restauracja-2.png";
import restauracja3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/0/restauracja/restauracja-3.png";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData0 = [
  {
    nazwaMiejsca: "fizjoterapia-1",
    fotyTegoMiejsca: [
      fizjoterapiaPierwsza1,
      fizjoterapiaPierwsza2,
      fizjoterapiaPierwsza3,
      fizjoterapiaPierwsza4,
      fizjoterapiaPierwsza5,
    ],
  },
  {
    nazwaMiejsca: "fizjoterapia-2",
    fotyTegoMiejsca: [],
  },
  {
    nazwaMiejsca: "restauracja",
    fotyTegoMiejsca: [restauracja1, restauracja2, restauracja3],
  },
  {
    nazwaMiejsca: "recepcja",
    fotyTegoMiejsca: [recepcja1],
  },
];
