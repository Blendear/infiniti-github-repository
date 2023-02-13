const SVGLaser = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
    >
      <path
        d="M8 31H8.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M13 34H13.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M19 31H19.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M24 34H24.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M29 31H29.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 24.7273L8.05718 26.3573C11.2799 27.396 14.7997 26.9194 17.6301 25.061V25.061C20.566 23.1335 24.2366 22.6963 27.543 23.8804L36 26.9091"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="0.75"
        y1="19.25"
        x2="39.25"
        y2="19.25"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M27.8534 13.5572C22.832 19.1335 15.2749 10.6475 19.4589 5.99998"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M25.467 10.7473C23.4124 13.0289 20.7034 9.90167 22.4154 8.00004"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M26.5989 1.03092L24.5061 4.28903C24.2425 4.69941 24.3135 5.24009 24.674 5.56861L27.9954 8.59537C28.2997 8.87261 28.7427 8.93512 29.1118 8.75287L33.5493 6.56152"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M26 2.35645L31.3437 6.9873"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGLaser;
