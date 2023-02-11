const SVGKlockaMedical = () => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //
  // RESIZING pod parenta, poprzez dodanie w <svg> properties:
  // width={"inherit"}
  // height={"inherit"}
  return (
    <svg
      width={"inherit"}
      height={"inherit"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="esQKqtYR2zl1"
      viewBox="0 0 150 72"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="esQKqtYR2zl2-fill"
          x1="0.398489"
          y1="1.090214"
          x2="0.782558"
          y2="0"
          spreadMethod="pad"
          gradientUnits="objectBoundingBox"
          gradientTransform="translate(0 0)"
        >
          <stop id="esQKqtYR2zl2-fill-0" offset="0%" stop-color="#560074" />
          <stop id="esQKqtYR2zl2-fill-1" offset="100%" stop-color="#35c1a8" />
        </linearGradient>
      </defs>
      <path
        d="M-57.834898,0h150v72h-150v-72Z"
        transform="translate(57.834898 0)"
        fill="url(#esQKqtYR2zl2-fill)"
        stroke-width="0.5"
      />
    </svg>
  );
};
export default SVGKlockaMedical;
