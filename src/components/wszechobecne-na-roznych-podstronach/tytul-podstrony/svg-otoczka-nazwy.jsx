const SVGOtoczkaNazwy = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  //hook1 - protip1 - MAM SPOSOB NA DYNAMICZNE KOLORY SVG \/ - PODAJESZ "FILL" OR INNE PROPERTY POPRZEZ PROPS
  return (
    <svg
      fill={props.mojKolor} // <<<<, + \/
      stroke={props.mojKolor}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="eMyufX5emT31"
      viewBox="0 0 700 220"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <g transform="matrix(-1 0 0-1 700.000011 246.398493)">
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(0-.067428 1 0 684.434707 88.45977)"
          fill={props.mojKolor} // <<<<<<
          stroke-width="0"
        />
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(0-.067428 1 0 0.000038 88.45977)"
          fill={props.mojKolor}
          stroke-width="0"
        />
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(1.015133 0 0 1 0.000011 26.398492)"
          fill={props.mojKolor}
          stroke-width="0"
        />
      </g>
      <g transform="translate(-.000011-26.398493)">
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(0-.067428 1 0 684.434707 88.45977)"
          fill={props.mojKolor}
          stroke-width="0"
        />
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(0-.067428 1 0 0.000038 88.45977)"
          fill={props.mojKolor}
          stroke-width="0"
        />
        <rect
          width="689.564793"
          height="15.565304"
          rx="0"
          ry="0"
          transform="matrix(1.015133 0 0 1 0.000011 26.398492)"
          fill={props.mojKolor}
          stroke-width="0"
        />
      </g>
    </svg>
  );
};
export default SVGOtoczkaNazwy;
