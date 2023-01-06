////
////
////~~ A.  Zaciagam info o trenerach
////
////       A.1. Baza danych importowana
// //
// //           A.1.1.
// //
////~~ B. Pokazuję fote, imie, n aziwsko, social media - adekwatne do trenera
////
////       B.1. Miejsce - na wyświetlenie data
// //
// //           B.1.1. Zaludnienie - (KOLEJNOŚĆ RĘCZNA) konkretnymi osobami

import styles from "src/styles/sass/styles-all.module.scss";
////
////~~ A.  Zaciagam info o trenerach
////
////       A.1. Baza danych importowana
// //
import { kadraDataArray } from "../../../../components/dedykowane-do-strony-konkretnej/fitness-kadra/kadraData";
import Image from "next/image";

const Kadra = () => {
  return (
    <div className={styles["layout__fitness-kadra__cala-strona"]}>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__tytulowy-opis-strony"]
        }
      >
        ONI POMAGAJA NAM ROSNĄĆ
      </div>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__recepcja-wiersz"]
        }
      >
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__recepcja-wiersz--zero-napis"
            ]
          }
        >
          RECEPCJA
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--jeden"]
          }
        >
          {/* RECEPCJA */}
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--jeden--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.dedykowane-do-strony-konkretnej/fitness/kadra/bator-monika.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--jeden--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--dwa"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--dwa--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--dwa--foto-img-element"
                ]
              }
              // kadraDataArray
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
      </div>
      <div
        className={
          styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz"]
        }
      >
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--napis"]
          }
        >
          TRENERZY
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--jeden"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwa"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--trzy"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--cztery"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--piec"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--szesc"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--siedem"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__trenerzy-wiersz--osiem"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dziewiec"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dziesiec"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--jedenascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwanascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--trzynascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--czternascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--pietnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--szestnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--siedemnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--osiemnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dziewietnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwadziescia"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--dwa-jeden"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles[
              "layout__fitness-kadra__cala-strona__trenerzy-wiersz--osiemnascie"
            ]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
      </div>
      <div
        className={styles["layout__fitness-kadra__cala-strona__manager-wiersz"]}
      >
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__manager-wiersz--jeden"]
          }
        >
          <div
            className={
              styles[
                "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-div-parent-element"
              ]
            }
          >
            <Image
              src={`/images/.design-pattern-placeholders/pietro1.jpg`}
              alt={`nie pyklo zdjecie`}
              height={100}
              width={100}
              layout="responsive"
              objectFit="cover"
              className={
                styles[
                  "layout__fitness-kadra__cala-strona__recepcja-wiersz--trzy--foto-img-element"
                ]
              }
            />
          </div>
        </div>
        <div
          className={
            styles["layout__fitness-kadra__cala-strona__manager-wiersz--napis"]
          }
        >
          MANAGER
        </div>
      </div>
    </div>
  );
};
export default Kadra;

// data kadry stworz
// 2. containery pobuduj

// 3. w każdy z trzech wsadź
//
//
//
//
