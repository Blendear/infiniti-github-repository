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
import squash1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/squash/squash-1.png";
import squash2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/squash/squash-2.png";
// import sqash3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/squash/3.png";
import strefaMaszynPierwsza1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-1/strefa-maszyn-pierwsza-1.png";
import strefaMaszynPierwsza2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-1/strefa-maszyn-pierwsza-2.png";
import strefaMaszynPierwsza3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-1/strefa-maszyn-pierwsza-3.png";
import strefaMaszynPierwsza4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-1/strefa-maszyn-pierwsza-4.png";

import strefaMaszynDruga0 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-0.png";
import strefaMaszynDruga1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-1.png";
import strefaMaszynDruga2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-2.png";
import strefaMaszynDruga3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-3.png";
import strefaMaszynDruga4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-4.png";
import strefaMaszynDruga5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-2/strefa-maszyn-druga-5.png";

import strefaMaszynTrzecia1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-3/strefa-maszyn-trzecia-1.png";
import strefaMaszynTrzecia2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-3/strefa-maszyn-trzecia-2.png";
import strefaMaszynTrzecia3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-maszyn-3/strefa-maszyn-trzecia-3.png";

import wolneCiezary1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-wolnych-ciezarow/wolne-ciezary-1.png";
import wolneCiezary2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-wolnych-ciezarow/wolne-ciezary-2.png";
import wolneCiezary3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-wolnych-ciezarow/wolne-ciezary-3.png";
import wolneCiezary4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/strefa-wolnych-ciezarow/wolne-ciezary-4.png";

import boisko1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-1.png";
import boisko2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-2.png";
import boisko3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-3.png";
import boisko4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-4.png";
import boisko5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-5.png";
import boisko6 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/boisko/boisko-6.png";

import maty1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/maty/maty-1.png";

import cialoIUmysl1 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-1.png";
import cialoIUmysl2 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-2.png";
import cialoIUmysl3 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-3.png";
import cialoIUmysl4 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-4.png";
import cialoIUmysl5 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-5.png";
import cialoIUmysl6 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-6.png";
import cialoIUmysl7 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/galeria-INFINITI/1/cialo-i-umysl/cialo-i-umysl-7.png";

import foto7 from "../../../../../public/images/.dedykowane-do-strony-konkretnej/infiniti/o-nas/partnerzy/7.png";

//hook1 - produktywniejszy sposob zaciagania i zczytywania danych bardizje automatyczniue?
//.
//TAK - PO PROSTU KAŻDE MIEJSCE === NOWY FOLDER, ZAMIAST NOWY OBJECT PROPERY. wtedy wystarczy będzie zrobić ... w sumie nie wiem co. To jest wyjscie?
//
//       A.2. Każdy object w arrayu dostaje "staticcly imported image" jako property "image"
//
export const carouselData1 = [
  {
    nazwaMiejsca: "chillera-utopia",
    fotyTegoMiejsca: [],
  },
  {
    nazwaMiejsca: "maty",
    fotyTegoMiejsca: [maty1],
  },
  {
    nazwaMiejsca: "cialo-i-umysl",
    fotyTegoMiejsca: [
      cialoIUmysl1,
      cialoIUmysl2,
      cialoIUmysl3,
      cialoIUmysl4,
      cialoIUmysl5,
      cialoIUmysl6,
      cialoIUmysl7,
    ],
  },
  {
    nazwaMiejsca: "squash",
    fotyTegoMiejsca: [squash1, squash2],
  },
  {
    nazwaMiejsca: "strefa-maszyn-1",
    fotyTegoMiejsca: [
      strefaMaszynPierwsza1,
      strefaMaszynPierwsza2,
      strefaMaszynPierwsza4,
      strefaMaszynPierwsza3,
    ],
  },
  {
    nazwaMiejsca: "strefa-maszyn-2",
    fotyTegoMiejsca: [
      strefaMaszynDruga0,
      strefaMaszynDruga1,
      strefaMaszynDruga2,
      strefaMaszynDruga3,
      strefaMaszynDruga4,
      strefaMaszynDruga5,
    ],
  },
  {
    nazwaMiejsca: "strefa-maszyn-3",
    fotyTegoMiejsca: [
      strefaMaszynTrzecia1,
      strefaMaszynTrzecia2,
      strefaMaszynTrzecia3,
    ],
  },
  {
    nazwaMiejsca: "strefa-wolnych-ciezarow",
    fotyTegoMiejsca: [
      wolneCiezary1,
      wolneCiezary2,
      wolneCiezary3,
      wolneCiezary4,
    ],
  },

  {
    nazwaMiejsca: "boisko",
    fotyTegoMiejsca: [boisko1, boisko2, boisko3, boisko4, boisko5, boisko6],
  },
  {
    image: foto7,
  },
  {
    image: foto7,
  },
  {
    image: foto7,
  },
  {
    image: foto7,
  },
];
