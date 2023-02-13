const SVGMagnet = (props) => {
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
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M14.9267 11.1177L19.3611 6.68335L14.6777 2L10.2433 6.4344M14.9267 11.1177C14.9267 11.1177 17.9864 8.05808 10.4923 15.5521C2.99822 23.0462 10.4304 29.9062 17.6384 22.6982C24.8463 15.4902 22.0727 18.2638 22.0727 18.2638M14.9267 11.1177L10.2433 6.4344M10.2433 6.4344C10.2433 6.4344 17.5541 -0.87635 5.80894 10.8688C-5.93624 22.6139 10.3272 38.8774 22.0724 27.1323C33.8176 15.3871 26.5068 22.6979 26.5068 22.6979M22.0727 18.2638L26.5071 13.8294L30.9412 18.2635L26.5068 22.6979M22.0727 18.2638L26.5068 22.6979"
        stroke={props.mojKolor}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGMagnet;
