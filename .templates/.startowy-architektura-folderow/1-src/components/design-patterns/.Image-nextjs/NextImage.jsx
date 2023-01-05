{
  /*
  CSS - gdybyś chciał wpłynać na ten skryty w HTMLu <img> (no jest autowrapniety w <span>y etc oprzez next js) \/
  \/
  DESCENDANT selector, czyli pierwszy <img> który znajdize, bezposrendio zmieni
  
  &--końcówka-classy-WQRAPPERA-twojego-imagea img {
            border-radius: 45%;
          }

  */
  /* <div className={styles["layout__strona-glowna__opis-i-rysunek"]}>
        /\ jemu daj "position:realtive"
        <div
          className={styles["layout__strona-glowna__opis-i-rysunek__rysunek"]}
        >
          /\ jemu przypisz classe
          <Image
            src={`/images/.design-pattern-placeholders/pietro1.jpg`}
            alt={`nie pyklo zdjecie`}
            height={200}
            width={100}
            layout="responsive"
            objectFit="cover"
          />
          /\ jemu zadnej classy nie dajesz
        </div> */
}
