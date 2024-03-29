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
// import foto1 from "../../../../../public/";

// import foto2 from "../../../../../public/";
// import foto3 from "../../../../../public";
// import foto4 from "../../../../../public";

//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
const starterString =
  "Mapa 3D wybranego piętra klubu INFINITI, wraz z nazwami konkretnych miejsc na piętrze - aktualnie widać poziom";

export const carouselData = [
  {
    image:
      "/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/minus1.png",
    altText: `${starterString} minus pierwszy`,
  },
  {
    image:
      "/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/zero.png",
    altText: `${starterString} zerowy (parter)`,
  },
  {
    image:
      "/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/1.png",
    altText: `${starterString} pierwszy`,
  },
  {
    image:
      "/images/.dedykowane-do-strony-konkretnej/1-strona-glowna-infiniti/carousel-poziomy/2.png",
    altText: `${starterString} drugi`,
  },
];
