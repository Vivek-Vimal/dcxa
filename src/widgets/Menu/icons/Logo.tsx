import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <image width="20" height="20" href={isDark ? "/images/Logo.png" : "/images/Logo.png"} />
    </Svg>
  );
};

export default Logo;
