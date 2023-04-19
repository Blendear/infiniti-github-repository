//
//
//~~ A.  Array of objects of foty
//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//

//
//       A.1. Trap1 - Staticly imported foty muszą być, żeby next.js'owy Image je załapał
//
// import foto1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto6 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
// import foto7 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/2.png";
import masaz1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/masaz/masaz-1.png";

import salaIC1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-ic/ic-1.png";
import salaIC2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-ic/ic-2.png";
import salaIC3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-ic/ic-3.png";

import salaZolta1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-zolta/sala-zolta-1.png";
import salaZolta2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-zolta/sala-zolta-2.png";
import salaZolta3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/sala-zolta/sala-zolta-3.png";

import strefaCardio1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/strefa-cardio/strefa-cardio-1.png";
import strefaCardio2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/strefa-cardio/strefa-cardio-2.png";
import strefaCardio3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/2/strefa-cardio/strefa-cardio-3.png";

//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData2 = [
  {
    nazwaMiejsca: "masaz",
    fotyTegoMiejsca: [masaz1],
  },
  {
    nazwaMiejsca: "sala-ic",
    fotyTegoMiejsca: [salaIC1, salaIC2, salaIC3],
  },
  {
    nazwaMiejsca: "sala-zolta",
    fotyTegoMiejsca: [salaZolta1, salaZolta2, salaZolta3],
  },
  {
    nazwaMiejsca: "strefa-cardio",
    fotyTegoMiejsca: [strefaCardio1, strefaCardio2, strefaCardio3],
  },
];
//herehere13.02.2023 uzupelniam importy
