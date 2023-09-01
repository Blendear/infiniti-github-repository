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
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="none"
    >
      <path
        d="M22.3506 29L17.9551 26.8263C17.0638 26.3855 16.4998 25.4773 16.4998 24.483V24.483C16.4998 23.835 16.7404 23.2101 17.1751 22.7295L18.7499 20.9881C20.1981 19.3867 21 17.3045 21 15.1454V14.0435C21 13.3492 20.9375 12.6564 20.8133 11.9734L20.3165 9.24073C20.1083 8.09592 19.637 7.01516 18.9395 6.08375V6.08375C16.4327 2.73588 11.6735 2.08185 8.35655 4.62938L7.53138 5.26314C3.50797 8.35322 3.63166 13.8426 6.15056 18.2462C6.9953 19.723 7.648 21.4133 7.99977 23.4762V23.4762C8.35772 25.5753 6.86487 27.2402 4.94452 28.1604L3.19236 29"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M35 12.9984C35 12.9984 33.2526 12.9048 30.9256 12.9984C28.5986 13.092 28.1284 9.11281 30.9256 9"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M35 20.0016C35 20.0016 33.5438 20.0952 31.6047 20.0016C29.6655 19.908 29.2737 23.8872 31.6047 24"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M32.5 16.0012C32.5 16.0012 29.5437 16.0714 27.6045 16.0012C25.6654 15.931 25.2738 18.9154 27.6048 19"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M36 16H36.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M38 14H38.5"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGWodor;
