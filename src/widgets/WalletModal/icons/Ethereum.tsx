import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <script />
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#627EEA" />
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity={0.602} d="M16.498 4v8.87l7.497 3.35z" />
          <path d="M16.498 4L9 16.22l7.498-3.35z" />
          <path fillOpacity={0.602} d="M16.498 21.968v6.027L24 17.616z" />
          <path d="M16.498 27.995v-6.028L9 17.616z" />
          <path fillOpacity={0.2} d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
          <path fillOpacity={0.602} d="M9 16.22l7.498 4.353v-7.701z" />
        </g>
      </g>
      <script />
    </svg>
  );
};

export default Icon;