//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/redux/hooks";
import { menuINavbarSliceActions } from "../../../../store/redux/store-redux";

import ZmienneStartoweTlo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/fota";
import ZmienneStartoweLogo from "../../../../components/wszechobecne-na-roznych-podstronach/zmienne-startowe-logo-i-fota/logo";
import TytulPodstrony from "../../../../components/wszechobecne-na-roznych-podstronach/tytul-podstrony/tytul-podstrony";

import ZabiegKonkretny from "../../../../components/strona-glowna/medical/usługi/zabieg-konkretny";

import SVGSolux from "../../../../components/strona-glowna/medical/usługi/svg/svg-solux.jsx";
import SVGLaser from "../../../../components/strona-glowna/medical/usługi/svg/svg-laser.jsx";
import SVGDrenaz from "../../../../components/strona-glowna/medical/usługi/svg/svg-drenaz";
import SVGElektro1 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-1";
import SVGElektro2 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-2";
import SVGElektro3 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-3";
import SVGElektro4 from "../../../../components/strona-glowna/medical/usługi/svg/svg-elektro-4";
import SVGWodor from "../../../../components/strona-glowna/medical/usługi/svg/svg-wodor";
import SVGUltradzwiek from "../../../../components/strona-glowna/medical/usługi/svg/svg-dzwiek";
import SVGMagnet from "../../../../components/strona-glowna/medical/usługi/svg/svg-magnet";

const kolorSVG = "#246798";

const MedicalUslugi = () => {
  const reduxStateIsMenuOpen = useAppSelector(
    (state) => state.menuINavbarReducer.menuIsOpen
  );

  const dispatch = useAppDispatch();

  const handlerToggleMenuIsOpen = (event) => {
    dispatch(
      menuINavbarSliceActions.ustawWidocznoscMenu({
        toggleWidocznoscMenu: false,
      })
    );
  };
  useEffect(() => {
    handlerToggleMenuIsOpen();
  }, []);

  return (
    <div
      className={
        reduxStateIsMenuOpen === false
          ? styles["layout__medical-uslugi__cala-strona"]
          : styles["menu-modal__closed-variant"]
      }
    >
      <ZmienneStartoweTlo tloPath="tlo-Medical.png" />
      <ZmienneStartoweLogo logoPath="logo-Medical.jpg" />
      <div
        className={
          styles["layout__medical-uslugi__cala-strona__0-nazwa-podstrony"]
        }
      >
        <TytulPodstrony nazwaPodstrony="USŁUGI" />
      </div>
      <div
        className={
          styles[
            "layout__medical-uslugi__cala-strona__opis-korzystania-ze-strony"
          ]
        }
      >
        WYBIERZ <strong>ZABIEG</strong> & <strong>SZCZEGÓŁY</strong>, KTÓRE CIĘ
        INTERESUJĄ
      </div>
      <div
        className={
          styles["layout__medical-uslugi__cala-strona__lista-zabiegow"]
        }
      >
        {/* //hook1 - daloby sie to zrobisz szycbiej, robic plik z danymi i mapujac renderujaco, prawda? \/*/}
        {/* NIE BYLOBY JEBANIA SIE z dopasowywaniem tytulow etc. mhmmm */}
        <ZabiegKonkretny
          e={
            <ul>
              <li>wzmocnienie naturalnej odporności</li>
              <li>dotlenienie i poprawienia ogólnego zdrowia organizmu</li>
              <li>poprawienie jakości snu</li>
              <li>przywrócenie witalności i zregenerowanie organizmu</li>
              <li>opóźnienie procesu starzenia</li>
              <li>poprawienie kondycji i wydolności organizmu</li>
            </ul>
          }
          d={
            <ul>
              <li>chęci spowolnienia efektów starzenia organizmu</li>
              <li>osłabionej odporności</li>
              <li>
                potrzeby poprawy jakości życia w chorobach przewlekłych,
                opóźnianie procesów starzenia
              </li>
              <li>
                chęci wzmocnienia naturalnej odporności, wydolności i ogólnego
                zdrowia organizmu
              </li>
              <li>chorób sercowo-naczyniowych</li>
              <li>chorób mózgowo-naczyniowych</li>
              <li>nowotworów</li>
              <li>chorób metabolizmu</li>
              <li>chorób i zaburzeń układu oddechowego</li>
            </ul>
          }
          j={
            <ul>
              <li>
                wodór podaje się do organizmu poprzez przewód nosowy. Inhalacja
                wodoru jest najskuteczniejszym sposobem na wprowadzenie wodoru
                do organizmu
              </li>
              <li>wodór podaje się do organizmu poprzez przewód nosowy</li>

              <li>
                wdychanie wodoru osiąga maksymalny poziom w osoczu w około 30
                minut
              </li>
              <li>
                wodór utrzymuje się w organizmie do 30 godzin po inhalacji.
              </li>
            </ul>
          }
          p={
            <ul>
              <li>brak. Nie posiada skutków ubocznych</li>
            </ul>
          }
          tytulZAbiegu="INHALACJA AKT. WODORU"
          svgComponent={<SVGWodor mojKolor={kolorSVG} />}
          isNowoscIMaFoty={true}
          isNowoscIMaZnaczek={true}
        />
        {/* //herehere14.02.2023 -  dokoncz */}
        <ZabiegKonkretny
          e={
            <ul>
              <li>obniżenie napięcia mięśniowego</li>
              <li>działanie przeciwbólowe</li>
              <li>działanie przeciwzapalne</li>
            </ul>
          }
          d={
            <ul>
              <li>bóli kręgosłupa</li>
              <li>bóli mięśniowych</li>
              <li>odleżyn</li>
              <li>przewlekłych stanów zapalnych</li>
              <li>przykurczy mięśni</li>
              <li>stłuczeń i skręceń</li>
              <li>oparzeń</li>
              <li>trudno gojących się ran</li>
              <li>stanów pooperacyjnych</li>
            </ul>
          }
          j={
            <ul>
              <li>
                podczas zabiegu pacjent może odczuwać przyjemne uczucie ciepła
              </li>
              <li>
                lampę ustawia się w zależności od odczucia ciepła przez pacjenta
              </li>
              <li>średni czas zabiegu wynosi ok. 15-20 minut</li>
              <li>
                po zabiegu może pojawić się odczyn miejscowy na skórze, tzw.
                rumień- na skutek rozszerzenia włośniczek, tętniczek oraz naczyń
                żylnych. Rumień ustępuje w ciągu kilkunastu minut.
              </li>

              <li>
                {
                  "dokładnie rzecz biorąc - jedna z form światłolecznictwa wykorzystująca lampę ze światłem podczerwonym. Lampa Sollux to urządzenie elektryczne emitujące głównie promieniowanie podczerwone, które wnika głęboko w tkanki. Urządzenie posiada dodatkowe filtry: → niebieski, który działa przeciwbólowo, → czerwony, który łagodzi stany zapalne i przyśpiesza gojenie się ran. Lampę ustawia się w zależności od odczucia ciepła przez pacjenta. Promieniowanie podczerwone wywołuje w tkankach ciepło, które rozszerza naczynia krwionośne."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>ostre stany zapalne</li>
              <li>krwawienia</li>
              <li>epilepsja</li>
              <li>choroby układu krążenia</li>
              <li>ciąża</li>
              <li>nowotwory</li>
              <li>choroby nerek</li>
              <li>żylaki</li>
              <li>stany gorączkowe</li>
              <li>gruźlica</li>
              <li>miażdżyca</li>
              <li>wieże rany</li>
              <li>złamania</li>
            </ul>
          }
          tytulZAbiegu="LAMPA SOLLUX"
          svgComponent={<SVGSolux mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwzapalne</li>
              <li>działanie przeciwbólowe</li>
              <li>
                przyspieszenie i optymalizowanie gojenia się ran i owrzodzeń
                oraz tworzenia blizn zrostu kostnego
              </li>
              <li>przyspieszenie gojenia złamań kości</li>
            </ul>
          }
          d={
            <ul>
              <li>schorzeń o podłożu reumatycznym i zwyrodnieniowym</li>
              <li>okresu po urazach typu skręcenia, zwichnięcia i złamania</li>
              <li>utrudnionych procesów gojenia skóry w przebiegu odleżyn</li>
              <li>ostrego stanu zapalnego tkanek miękkich</li>
              <li>zespołu cieśni nadgarstka</li>
              <li>ostrogi piętowej</li>
              <li>łokcia golfisty/ tenisisty</li>
              <li>przykurczy mięśni</li>
            </ul>
          }
          j={
            <ul>
              <li>zabieg nieodczuwalny dla pacjenta</li>
              <li>średni czas zabiegu wynosi ok. 5-10 min.</li>
              <li>
                {
                  "dokładnie rzecz biorąc - To metoda fizykoterapii polegająca na naświetlaniach powierzchni ciała, miejscowych (punktowych) lub na większych obszarach. Dzięki pobudzeniu (biostymulacji) komórek energią promieniowania laserowego, możliwe jest osiągnięcie skutków terapeutycznych. Zabieg ten wykonuje się w celu pobudzenia komórek."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>ciąża</li>
              <li>nowotwory</li>
              <li>przyjmowanie leków fotouczulających</li>
              <li>padaczka</li>
              <li>gorączka</li>
              <li>infekcje wirusowe i bakteryjne</li>
              <li>stany wyczerpania organizmu</li>
              <li>krwotoki z przewodu pokarmowego</li>
              <li>stosowanie leków przeciwzakrzepowych i sterydów</li>
            </ul>
          }
          tytulZAbiegu="LASEROTERAPIA"
          svgComponent={<SVGLaser mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwbólowe</li>
              <li>redukcja problemów z poruszaniem kończynami</li>
              <li>zmniejszenie uczucia nadmiernego ciężaru kończyn,</li>
              <li>redukcja obrzęków</li>
            </ul>
          }
          d={
            <ul>
              Obrzęków limfatycznych, powstających np. w stanach:
              <li>pourazowych</li>
              <li>
                w cukrzycy, gdy następuje zaburzenie transportu płynów w
                organizmie
              </li>
              <li>
                w stanach pozapalnych wyzwolonych różnymi przyczynami: ukąszenia
                owadów, owrzodzeniach, drobnych urazach
              </li>
              <li>w nowotworach</li>
              <li>
                poza rakiem węzłów chłonnych guzy mogą wyzwalać niedrożność
                naczyń limfatycznych
              </li>
              <li>
                w powikłaniach pourazowych nawet po wielu latach od choroby
              </li>
              <li>
                np. po skomplikowanym złamaniu nogi obrzęki mogą się ujawniać do
                końca życia po przeciążeniu nogi
              </li>
              <li>pasożytniczych</li>
              <li>w chorobach tkanki łącznej, m.in. zwyrodnieniowych</li>
              <li>
                w przewlekłej niewydolności krążenia, a także innych chorobach,
                jak m.in.: zespole Turnera, Proteusza, czy chorobie Milroya
              </li>
            </ul>
          }
          j={
            <ul>
              <li>
                podczas zabiegu pacjent może odczuwać ucisk o określonej sile
              </li>
              <li>średni czas trwania zabiegu wynosi ok. 30-60 min.</li>
              <li>
                {
                  "dokładnie rzecz biorąc - Drenaż limfatyczny jest formą masażu manualnego lub mechanicznego, który ma na celu odprowadzenie zbierającej się w organizmie limfy i krwi oraz usprawnienie ich przepływu. Metodę tę stosuje się najczęściej w stanach pourazowych, a poddawane są jej ręce oraz nogi. Drenaż przynosi spuchniętym kończynom ulgę i przyśpiesza gojenie się uszkodzonych tkanek (poprzez przyśpieszenie transportu limfocytów)."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>nowotwory</li>
              <li>nadciśnienie tętnicze</li>
              <li>zakrzepowe zapalenie żył</li>
              <li>stany zapalne stawów</li>
              <li>twierdzone krwiaki w kończynach</li>
              <li>niewydolność nerek lub serca</li>
              <li>miażdżycę</li>
              <li>{"zmiany naczyń krwionośnych (żylaki)"}</li>
              <li>stany zapalne naczyń limfatycznych</li>
              <li>choroby skóry</li>
            </ul>
          }
          tytulZAbiegu="DRENAŻ LIMFATYCZNY"
          svgComponent={<SVGDrenaz mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>zmniejszenie bólu, np. kręgosłupa</li>
              <li>zwiększanie sprawności mięśniu</li>
              <li>podniesienie ogólnej odporności</li>
              <li>
                rehabilitacyjne korzyści, w szczególności wspierające
                fizykoterapię, np. aby zregenerować uszkodzony nerw obwodowy
              </li>
              <li>
                modelowanie sylwetki, poprzez zmniejszenie obwodu tkanki
                tłuszczowej, przyspieszenie produkcji kolagenu i elastyny
              </li>
            </ul>
          }
          d={
            <ul>
              <li>
                uszkodzonego mięśnia, wymagającego rehabilitacji i/lub
                fizykoterapii
              </li>
              <li>porażenia</li>
              <li>niedowładu typu wiodkiego</li>
              <li>
                potrzeby niedopuszczenia do degeneracji odnerwionego mięśnia
              </li>
              <li>bólu kręgosłupa</li>
              <li>zmniejszonej odporności ogólnej</li>
              <li>celulitu</li>
              <li>nadmiernej, niechcianej tkanki tłuszczowej</li>
            </ul>
          }
          j={
            <ul>
              <li>
                pacjent w trakcie zabiegu może odczuwać ból. Inne odczucia
                towarzyszące to ukłucia i mrowienie, charakterystyczne dla
                zabiegów z zakresu elektroterapii
              </li>
              <li>
                podczas zabiegu powinno dojść do widocznego skurczu
                stymulowanych mięśni, może to powodować także ruch kończyn
              </li>
              <li>średni czas zabiegu wynosi ok. 20-30 minut</li>
              <li>
                {
                  "dokładnie rzecz biorąc - Elektrostymulacja jest zabiegiem wykorzystującym prąd impulsowy w celu pobudzenia i wzmocnienia nerwów lub uszkodzonych mięśni. Do przeprowadzenia zabiegu wykorzystuje się prąd niskiej i średniej częstotliwości, który przyczynia się do zmniejszania bólu, redukcji obrzęków, rozluźnienia mięśni oraz poprawy przewodnictwa chemiczno-nerwowego. Zadaniem zabiegu jest utrzymanie zdolności odnerwionego mięśnia do skurczu, zapobieganie zanikom mięśniowym a także przywracanie siły i rozbudowa masy mięśnia."
                }
              </li>
              {/* //herehere14.02.2023 - dopisz /\ */}
            </ul>
          }
          p={
            <ul>
              <li>choroby serca</li>
              <li>epilepsja</li>
              <li>stany zpalane skóry</li>
              <li>spastyczne porażenia mięśni</li>
              <li>żyki</li>
              <li>guzki i nowotwory o niewiadomym pochodzeniu</li>
            </ul>
          }
          tytulZAbiegu="ELEKTROSTYMULACJA"
          svgComponent={<SVGElektro1 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>
                {" "}
                Zależnie od wybranego podtypu elektropterapii, które opisane
                zostały poniżej
              </li>
            </ul>
          }
          d={
            <ul>
              {" "}
              Elektroterapia wspiera procesy zdrowienia i rehabilitacji w
              następujących schorzeniac:
              <li>choroby układu ruchu</li>
              <li>
                artroza, choroby zwyrodnieniowe, reumatyczne i dyskopatie, bóle
                kręgosłupa, osteoporoza, zapalenie stawów i tkanek
                okołostawowych
              </li>
              <li>choroby układu nerwowego</li>
              <li>
                rwa kulszowa, rwa ramienna, przewlekłe zapalenia splotów i
                korzeni nerwowych, neuralgie, stany zapalne nerwów obwodowych,
                nerwobóle, stany podrażnienia korzeni nerwowych; – Choroby i
                stany patologiczne tkanek
              </li>
              <li>
                blizny i przykurcze, gojenie ran i owrzodzeń, resorpcja
                wysięków, krwiaków i obrzęków
              </li>
              <li>obrażenia i kontuzje</li>
              <li>
                łamania, urazy mięśni, dolegliwości bólowe związane z urazami
              </li>
              <li>osłabienie i upośledzenie pracy mięśni</li>
              <li>
                zmniejszenie napięcia mięśni, elektrostymulacja mięśni
                odnerwionych, stymulacja mięśni zanikających, rehabilitacja
                spastycznego porażenia mięśni, leczenie zwiększonego napięcia
                mięśniowego, zwiększenie masy i siły mięśniowej
              </li>
            </ul>
          }
          j={
            <ul>
              {" "}
              Przebieg zależy od podtypu elektroterapii:
              <ul>
                {" "}
                <br />
                <strong>PRĄDY TENS</strong>
                <li>
                  pacjent powinien czuć delikatne mrowienie bądź skurcz mięśnia
                </li>
                <li>
                  natężenie prądu ustawiane jest do subiektywnych odczuć
                  pacjenta
                </li>
                <li>średni czas zabiegu wynosi ok. 15-30 minut</li>
                <li>
                  dokładnie rzecz biorąc - ten rodzaj zabiegu polega na
                  przezskórnej elektrostymulacji nerwów, poprzez prądy impulsowe
                  o małej częstotliwości. Po odpowiednim rozmieszczeniu elektrod
                  na ciele, fizjoterapeuta wybiera odpowiedni rodzaj prądu oraz
                  ustawia wszystkie parametry.{" "}
                </li>
                <br />
              </ul>
              <ul>
                <strong>GALWANIZACJA</strong>
                <li>pacjent w trakcie zabiegu powinien odczuwać mrowienie</li>
                <li>
                  wartość natężenia prądu w obwodzie ustala się do odczuć
                  pacjenta
                </li>
                <li>średni czas zabiegu wynosi ok. 15-30 minut</li>{" "}
                <li>
                  następstwem zabiegu galwanizacji jest powstanie w miejscu
                  zabiegu
                </li>
                <li>
                  rumienia galwanicznego. Utrzymuje się on do kilkudziesięciu
                  minut
                </li>
                <li>
                  {
                    "dokładnie rzecz biorąc - Jeden z zabiegów fizjoterapeutycznych z dziedziny elektroterapii wykorzystujący prąd stały. W zabiegu galwanizacji wykorzystuje się dwie płaskie elektrody. W celu lepszego przewodzenia prądu – elektrody umieszcza się na specjalnie nasączonych podkładach wiskozowych. Galwanizacja pobudza działanie układu nerwowego przyspieszając gojenie stanów zapalnych i działając przeciwbólowo. Ponadto elektroterapia stymuluje mięśnie do pracy, co pomaga zapobiegać zanikom."
                  }
                </li>
                <br />
              </ul>
              <ul>
                {" "}
                <strong>JONOFOREZA</strong>
                <li>pacjent w trakcie zabiegu powinien odczuwać mrowienie</li>
                <li>średni czas zabiegu wynosi ok. 10-20 minut</li>
                <li>
                  miejsca, do których zostały przyłożone elektrody, po zabiegu
                  mogą być lekko zaczerwienione
                </li>
                <li>
                  {
                    "dokładnie rzecz biorąc - Jonoforeza to zabieg należący do obszaru elektroterapii w rehabilitacji. Inaczej nazywana jest terapią jonową i polega na wprowadzaniu do tkanki związków chemicznych o działaniu leczniczym za pomocą prądu stałego. Lekarstwo jest aplikowane bezpośrednio na chore miejsce – dzięki czemu jonoforeza pozwala uzyskać bardzo dobre efekty. Dodatkowo nie obciąża przewodu pokarmowego, żołądka i wątroby. Czynnikiem leczniczym w jonoforezie nie jest prąd, ale jony dostarczone do organizmu. Zastosowanie prądu powoduje, że w tkankach podwyższa się temperatura. Wpływa to na poprawę krążenia i odżywienie komórek, co wspomaga np. działanie przeciwzapalnie czy przeciwbólowe."
                  }
                </li>
              </ul>
            </ul>
          }
          p={
            <ul>
              <li>wszczepione urządzenia takie jak, np. rozrusznik serca</li>
              <li>posiadanie endoprotezy, lub innego metalowego implantu</li>
              <li>chorobę nowotworową</li>
              <li>choroby serca</li>
              <li>epilepsja</li>
              <li>padaczka</li>
              <li>
                ostre stany zapalne skóry, bądź zmiany skórne, – zaburzenia
                czucia
              </li>
              <li>osobnicza nietolerancja prądu</li>
              <li>ciąża</li>
            </ul>
          }
          tytulZAbiegu="ELEKTROTERAPIA"
          svgComponent={<SVGElektro2 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwbólowe</li>
              <li>pobudzenie mięśni do skurczu</li>
              <li>rozszerzenie naczyń krwionośnych</li>
              <li>usprawnienie krążenia obwodowego</li>
              <li>
                usprawnienie procesów odżywczych i przemiany materii w tkankach
              </li>
              <li>usprawnienie perystaltyki jelit</li>
              <li>redukcja obrzęków</li>
            </ul>
          }
          d={
            <ul>
              <li>nerwobóle</li>
              <li>choroby o podłożu zwyrodnieniowo–wytwórczym</li>

              <li>
                dysfunkcje mięśni w obszarze miednicy mniejszej (np.
                nietrzymanie moczu)
              </li>
              <li>
                ból pleców, krzyża, kręgosłupa lub zespoły bólowe narządu ruchu{" "}
              </li>
              <li>obrzęki</li>
              <li>zaparć</li>
              <li>zaburzenia motoryki jelit</li>
              <li>bóli menstruacyjnych u kobiet</li>
            </ul>
          }
          j={
            <ul>
              <li>
                podczas wykonywania zabiegu pacjent powinien odczuwać wibracje
              </li>
              <li>
                natężenie prądu jest dobierane w zależności od tolerancji
                pacjenta
              </li>{" "}
              <li>
                dawkowanie jest uzależnione przede wszystkim od stadium i
                rodzaju choroby
              </li>{" "}
              <li>średni czas zabiegu wynosi ok. 6-20 minut</li>
              <li>
                {
                  "dokładnie rzecz biorąc - Prądy interferencyjne (zwane również prądami Nemeca) to prądy średniej częstotliwości modulowane w amplitudzie z małą częstotliwością. "
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>gorączka</li>
              <li>nowotwór</li>
              <li>choroby zakaźne</li>
              <li>
                obecność metalowych implantów w miejscu zabiegu, np. w przypadku
                zaimplantowanego rozrusznika serca, nie można wykonywać zabiegu
                w okolicy klatki piersiowej
              </li>
              <li>ciąża</li>
              <li>
                zmiany troficzne i niektóre schorzenia dermatologiczne powłok
                skórnych
              </li>
              <li>stosunkowo świeże przerwania ciągłości tkanek</li>
            </ul>
          }
          tytulZAbiegu="INTERFERENCJA"
          svgComponent={<SVGElektro3 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwbólowe</li>
              <li>obniżenie napięcia mięśni</li>
              <li>ozszerzenie naczyń krwionośnych</li>
              <li>przyrost masy mięśniowej</li>
              <li>
                elektrostymulacja mięśni i nerwów nieznacznie uszkodzonych
              </li>
            </ul>
          }
          d={
            <ul>
              <li>zespołów bólowych</li>
              <li>nerwobólu</li>
              <li>dyskopatii</li>
              <li>zapalenia okołostawowego</li>
              <li>zmiany po urazach narządu ruchu</li>
              <li>sinicy samorodnej kończyn</li>
              <li>półpaśca</li>
              <li>zaniku mięśni z nieczynności</li>
            </ul>
          }
          j={
            <ul>
              <li>pacjent powinien czuć delikatne mrowienie</li>
              <li>
                natężenie prądu ustawiane jest do subiektywnych odczuć pacjenta
              </li>{" "}
              <li>średni czas zabiegu wynosi ok. 6-8 minut</li>
              <li>
                <ul>
                  {
                    "dokładnie rzecz biorąc - prądy diadynamiczne (DD) są to prądy stosowane w fizjoterapii. Inaczej nazywane są również prądami Bernarda. Zaliczane do prądówo niskiej częstotliwości, które poprzez serie impulsów, wywołują określone reakcje organizmu "
                  }
                  <br />
                  Wyróżnia się 6 rodzajów prądów niskiej częstotliwości o
                  różnych parametrach, wchodzących w skład prądu
                  diadynamicznego. Stosowane w odpowiedniej kombinacji pozwalają
                  uzyskać oczekiwany efekt terapeutyczny.
                  <li>MF – działa pobudzająco i odżywia tkanki,</li>
                  <li>
                    DF – działa znieczulająco i rozluźniająco na mięśnie,
                    dlatego często stosuje się go w pierwszej kolejności,
                  </li>
                  <li>
                    RS – stosowany do elektrostymulacji mięśni zdrowych lub
                    nieznacznie uszkodzonych
                  </li>
                  <li>CP – obniża napięcie mięśniowe i zwiększa ukrwienie</li>
                  <li>LP – działa przeciwbólowo,</li>
                  <li>
                    MM – stosowany do elektrostymulacji mięśni zdrowych lub
                    nieznacznie uszkodzonych
                  </li>
                </ul>
              </li>
            </ul>
          }
          p={
            <ul>
              <li>ciąża</li>
              <li>gruźlica</li>
              <li>nowotwór</li>
              <li>przerwanie ciągłości skóry w miejscu zabiegu</li>
              <li>choroby skóry</li>
              <li>
                nadwrażliwość na reakcje fizykochemiczne występujące w wyniku
                działania prądu
              </li>
              <li>rozrusznik serca</li>
              <li>gorączka</li>
              <li>infekcje</li>
              <li>schorzenia metaboliczne</li>
            </ul>
          }
          tytulZAbiegu="DIADYNAMIKA"
          svgComponent={<SVGElektro4 mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>działanie przeciwbólowe</li>
              <li>działanie rozluźniające</li>
              <li>przyspieszenie gojenia</li>
            </ul>
          }
          d={
            <ul>
              <li>
                {
                  "stanów pourazowych (naderwaniach, skręceniach, zwichnięciach, złamaniach)"
                }
              </li>
              <li>chorób zwyrodnieniowych kręgosłupa i stawów</li>
              <li>ostrogi piętowej</li>
              <li> leczenia obrzęków o charakterze limfatycznym</li>
              <li>
                chorób reumatycznych, – leczenia przykurczów, blizn, krwiaków
              </li>
            </ul>
          }
          j={
            <ul>
              <li>zabieg nieodczuwalny dla pacjenta</li>
              <li>średni czas zabiegu wynosi ok. 4-10 minut</li>
              <li>
                {" "}
                {
                  "dokładnie rzecz biorąc - ultradźwięki to fale akustyczne o wysokiej częstotliwości (1-3 MHz). Tkanka naświetlana tego typu falami podczas zabiegu podlega mikro-masażowi, którego efektem jest zwiększona temperatura i przyspieszone mikrokrążenie. Dodatkowo ultradźwięki rozluźniają mięśnie. W związku z tym jest to zabieg idealny dla sportowców. Ultradźwięki w fizykoterapii aplikowane są za pomocą głowicy, a na skórę używana jest substancja sprzęgająca (żel) lub lek w postaci leku (zabieg ten nazywamy wtedy fonoforezą)."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>nowotwory i stany po ich operacyjnym usunięciu</li>
              <li>ciąża</li>
              <li>cukrzyca</li>
              <li>czynne procesy gruźlicze</li>
              <li>skazy krwotoczne</li>
              <li>niewydolność</li>
              <li> krążenia i zaburzenia rytmu serca</li>
              <li>ciężki stan ogólny</li>
              <li>niezakończony wzrost kości w obszarze tarczy wzrostowej</li>
              <li>nerwobóle niewyjaśnionego pochodzenia</li>
              <li>ostre procesy zapalne i stany gorączkowe</li>
              <li>zaburzenia ukrwienia obwodowego</li>
              <li>elektroniczne i metalowe implanty</li>
              <li>neuropatie</li>
              <li>zakrzepowe zapalenie żył</li>
              <li>wypadanie krążka międzykręgowego</li>
              <li>tany po wycięciu łuku kręgowego</li>
              <li>
                w przypadku implantów i endoprotez należy zachować środki
                ostrożności
              </li>
            </ul>
          }
          tytulZAbiegu="ULTRADŹWIĘKI"
          svgComponent={<SVGUltradzwiek mojKolor={kolorSVG} />}
        />
        <ZabiegKonkretny
          e={
            <ul>
              <li>złagodzenie obrzęków</li>
              <li>złagodzenie dolegliwości bólowych</li>
              <li>przyspieszenie zrostu kostnego</li>
              <li>skrócenie czasu rekonwalescencji</li>
            </ul>
          }
          d={
            <ul>
              <li>
                {
                  "urazów i stanów pourazowych w obrębie narządu ruchu (złamania, zwichnięcia, skręcenia, stłuczenia, stawy rzekome)"
                }
              </li>
              <li>
                {
                  "ostrych i przewlekłych skutkach urazów narządu ruchu (uszkodzenie ścięgien, więzadeł, torebki stawowej, krwiaki, obrzęki)"
                }
              </li>
              <li>chorób zwyrodnieniowych stawów</li>
              <li>osteoporozy</li>
              <li>miażdżycy</li>
              <li>nadciśnienia tętniczego i choroby niedokrwiennej serca</li>
              <li>
                {
                  "chorób neurologicznych (migrena, przewlekłe bóle głowy, w okresie poudarowym)"
                }
              </li>
              <li>{"chorób przewodu pokarmowego (choroba wrzodowa)"}</li>
              <li>{"chorób pulmonologicznych (zapalenie oskrzeli, zatok)"}</li>
              <li>chorób układu rodnego</li>
            </ul>
          }
          j={
            <ul>
              <li>zabieg nieodczuwalny dla pacjenta</li>

              <li>średni czas zabiegu wynosi ok. 15- 30 minut</li>
              <li>
                {
                  "stosujemy pole magnetyczne o niskiej częstotliwości (do 50Hz) i indukcji w przedziale 0,5-10 mT "
                }
              </li>
              <li>
                aparaty posiadają aplikatory w kształtach kołowych lub płytek
              </li>
              <li>
                {
                  "dokładnie rzecz biorąc - Podczas zabiegu pole magnetyczne przenika ciało docierając do każdej jego komórki, gdzie poprzez działanie na struktury błon komórkowych i procesy transportu jonów wspiera procesy naprawcze komórki ułatwiając przenikanie tlenu i substancji odżywczych do jej wnętrza. Pole magnetyczne pobudza syntezę kolagenu, czyli białka, które wchodzi w skład naszej skóry, ścięgien, a nawet rogówki oka. Właśnie dlatego magnetoterapię wykorzystuje się między innymi w leczeniu chorób skóry, oczu i narządu ruchu."
                }
              </li>
            </ul>
          }
          p={
            <ul>
              <li>
                {"obecność elektronicznych implantów (np. rozrusznik serca)"}
              </li>
              <li>cukrzyca u osób młodych</li>
              <li>choroby nowotworowe</li>
              <li>nadczynność tarczycy</li>
              <li>gruźlica</li>
              <li>ostre infekcje</li>
              <li>ciężkie i nie unormowane choroby serca i układu krążenia</li>
              <li>choroby układu pokarmowego z ryzykiem krwawienia</li>
            </ul>
          }
          tytulZAbiegu="POLE MAGNETYCZNE"
          svgComponent={<SVGMagnet mojKolor={kolorSVG} />}
        />
      </div>
    </div>
  );
};
export default MedicalUslugi;
