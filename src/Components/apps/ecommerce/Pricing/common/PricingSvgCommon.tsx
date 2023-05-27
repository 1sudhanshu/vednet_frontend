interface PricingSvgCommonInterFace {
  price: number;
}
const PricingSvgCommon = ({ price }: PricingSvgCommonInterFace) => {
  return (
    <svg x={0} y={0} viewBox="0 0 360 220">
      <g>
        <path
          fill="#655af3"
          d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"
        />
      </g>
      <text
        transform="matrix(1 0 0 1 69.7256 116.2686)"
        fill="#fff"
        fontSize={60}
      >
        ${price}
      </text>
      <text
        transform="matrix(0.9566 0 0 1 197.3096 83.9121)"
        fill="#fff"
        fontSize="29.0829"
      >
        .99
      </text>
      <text
        transform="matrix(1 0 0 1 233.9629 115.5303)"
        fill="#fff"
        fontSize="15.4128"
      >
        /Month
      </text>
    </svg>
  );
};

export default PricingSvgCommon;
