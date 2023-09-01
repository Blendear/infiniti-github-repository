const SVGWodor = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="244"
      viewBox="0 0 256 244"
      fill="none"
    >
      <path
        d="M229 128C229 185.112 229 154.301 229 228"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M9.93325 99.9962C13.6045 -22.9372 98.6385 23.4475 107.995 48.2267C117.352 73.006 87.9479 98.1143 87.9479 98.1143C87.9479 98.1143 44.174 80.5235 43.1916 113.361"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M135.641 60.8154C129.813 90.8716 121.439 100.292 102.091 110.668"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M149.729 85.394C145.676 102.368 140.682 107.535 129.422 112.99"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M95.9971 128C95.9973 181 130.497 211 130.497 238"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M138.997 162C213.39 168.498 231.997 135.5 227.997 69"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M250.497 156.5C233.997 138.5 225.507 135.5 229.507 69"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
      <path
        d="M121 33C127.076 25.0457 130.401 19.657 136 6"
        stroke={props.mojKolor}
        stroke-width="11"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGWodor;
