const SVGUltradzwiek = (props) => {
  //
  // Trap1 - CAMEL CASE nazewnictwo plików musi być, np.
  // sketch:type    zamień na    sketchType
  // xmlns:xlink    zamień na    xmlnsXlink
  // xlink:href     zamień na    xlinkHref
  //

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
    >
      <path
        d="M12.6249 25.8924L16.7204 22.5478C17.3942 21.9975 17.8703 21.2426 18.0764 20.3974L19.4952 14.5798C20.0404 12.3442 22.3745 10.9896 24.5075 11.8528C28.8645 13.6159 31.2186 15.6807 32.8057 19.3823C33.6405 21.3295 32.4271 23.4745 30.4137 24.1338L24.0472 26.2188C23.2718 26.4727 22.5927 26.9577 22.1008 27.6086L18.8601 31.897C17.4143 33.8103 14.6215 34.0301 12.8942 32.3666L12.3803 31.8718C10.653 30.2083 10.7675 27.4093 12.6249 25.8924Z"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M19.779 14.5268C25.3782 16.5965 27.4586 18.8583 29.8671 24.2417"
        sstroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M16.7733 27.5052L20.4551 23.682"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M11.0971 31.5457L9.87936 31.6352C7.79998 31.788 6.68887 29.2371 8.21687 27.8186V27.8186C10.1514 26.0225 7.87066 22.9614 5.59628 24.3013L2.27289 26.2592"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M29.9992 10.6372C32.1044 8.45116 35.9109 11.6486 33.5717 14.0776"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M29.291 7.57998C33.0206 3.70711 41.0044 10.5663 36.8604 14.8695"
        stroke={props.mojKolor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SVGUltradzwiek;
