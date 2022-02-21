import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="85" height="140" viewBox="0 0 85 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5002 0L36 61.593H55.075L81 0H60.5002Z" fill="#A1D2FF" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="11" y="57" width="66" height="75">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3122 57.7729H76.6696V131.083H11.3122V57.7729Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.291 68.513V63.1509C31.291 62.2792 32.0033 61.569 32.8787 61.569H55.1031C55.9784 61.569 56.6908 62.2792 56.6908 63.1509V68.513C52.7867 66.8706 48.4951 65.9625 43.9909 65.9625C39.4867 65.9625 35.1951 66.8706 31.291 68.513ZM60.5011 70.4176V63.1509C60.5011 60.1854 58.0794 57.7729 55.1031 57.7729H32.8787C29.9024 57.7729 27.4811 60.1854 27.4811 63.1509V70.4176C17.8075 76.0711 11.3122 86.5413 11.3122 98.5227C11.3122 116.505 25.9426 131.083 43.9909 131.083C62.0388 131.083 76.6696 116.505 76.6696 98.5227C76.6696 86.5413 70.1747 76.0711 60.5011 70.4176Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.9996 125.173C29.1115 125.173 17 113.363 17 98.8472C17 84.3301 29.1115 72.5208 43.9996 72.5208C58.8877 72.5208 71 84.3301 71 98.8472C71 113.363 58.8877 125.173 43.9996 125.173Z"
          fill="url(#paint1_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M52.5415 106.039C52.6467 107.525 51.1495 108.6 49.7753 108.026L44.4431 105.798L39.0905 107.977C37.7112 108.539 36.2239 107.45 36.3426 105.965L36.806 100.171L33.0742 95.7149C32.1204 94.5761 32.6971 92.8318 34.1417 92.4858L39.7743 91.1369L42.828 86.2156C43.6144 84.9481 45.4616 84.9565 46.2364 86.2312L49.2452 91.1807L54.8652 92.5809C56.3066 92.94 56.8673 94.6896 55.9032 95.8197L52.1309 100.241L52.5415 106.039Z"
          fill="#FFEFB9"
        />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H26.7694L56 62.5864H34.6168L4 0Z" fill="#C7E6FF" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="85"
          height="139.083"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="37.051"
          y1="48.3027"
          x2="-1.87544"
          y2="105.109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDE78" />
          <stop offset="1" stop-color="#FFBA3B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="41.3918"
          y1="62.7988"
          x2="10.1041"
          y2="104.919"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD06D" />
          <stop offset="1" stop-color="#F99912" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
