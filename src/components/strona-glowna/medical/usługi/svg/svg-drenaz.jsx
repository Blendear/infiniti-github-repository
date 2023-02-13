const SVGDrenaz = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  //hook1 - protip1 - MAM SPOSOB NA DYNAMICZNE KOLORY SVG \/ - PODAJESZ "FILL" OR INNE PROPERTY POPRZEZ PROPS
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="33"
      viewBox="0 0 35 33"
      fill="none"
    >
      <path
        d="M27.0487 8.25249C27.1591 3.04073 19.5818 0.887378 16.0014 4.92638"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M19.3038 27.9884C22.604 29.234 26.3429 25.098 24.8743 22.0005"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3.94599 24.0114L12.508 21.884C12.5588 21.8714 12.6121 21.8721 12.6625 21.8861L19.4309 23.7644C20.3882 24.03 21.3077 23.2363 21.1847 22.2505V22.2505C21.1821 22.2298 21.1704 22.2113 21.1527 22.2002L18.3515 20.4376C17.7094 20.0336 17.7334 19.0899 18.395 18.7189L25.2593 14.8705C25.6494 14.6518 25.8469 14.2006 25.7429 13.7656L25.174 11.3871M25.174 11.3871L16.8845 16.3404L18.0249 15.6891L25.174 11.3871ZM25.174 11.3871L23.8151 9.06255M23.8151 9.06255L16.1398 13.2266L17.0992 12.7061L23.8151 9.06255ZM23.8151 9.06255L21.86 7.54109C21.5747 7.31913 21.192 7.26834 20.8587 7.40825L12.3472 10.9818C12.189 11.0482 12.0505 11.1542 11.9451 11.2897L8.48304 15.7386C8.35704 15.9005 8.18427 16.0198 7.98819 16.0802L2.45656 17.7839"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M31 3V12.9631C31 13.3579 31.0468 13.7513 31.1393 14.1351L34 26"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M5 3V12.5475C5 12.9763 4.94485 13.4032 4.83592 13.8179L4 17"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGDrenaz;
