const SVGSolux = (props) => {
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
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
    >
      <path
        d="M11.2938 23.0729L12.4863 17.6536C12.789 16.2781 14.0078 15.2983 15.4162 15.2983H26.7817C28.6861 15.2983 30.1085 17.0498 29.7179 18.9137L28.5821 24.3331C28.2909 25.7226 27.0655 26.7177 25.6459 26.7177H14.2237C12.307 26.7177 10.8818 24.9449 11.2938 23.0729Z"
        stroke={props.mojKolor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22.3872 23.8629H19.5324C18.2184 23.8629 17.1533 22.7978 17.1533 21.4839C17.1533 20.17 18.2185 19.1049 19.5324 19.1049H22.3872C23.7011 19.1049 24.7662 20.17 24.7662 21.4839C24.7662 22.7978 23.7011 23.8629 22.3872 23.8629Z"
        stroke={props.mojKolor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10.9677 21.9597L2.55319 10.8678C1.28399 9.19473 1.01098 6.969 1.8382 5.03881V5.03881C2.75828 2.89196 4.86925 1.5 7.20495 1.5H8.11656C9.94854 1.5 11.712 2.19628 13.0499 3.4478L25.7177 15.2984"
        stroke={props.mojKolor}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M7.63688 11.4919L4.34487 18.7814C2.38638 23.118 3.76482 28.2343 7.63688 31V31"
        stroke={props.mojKolor}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGSolux;
