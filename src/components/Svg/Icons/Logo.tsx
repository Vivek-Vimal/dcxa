import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface Props extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<Props> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <image width="20" height="20" href={isDark ? "/images/Logo.png" : "/images/Logo.png"} />
    </Svg>
  );
};

export default Icon;
