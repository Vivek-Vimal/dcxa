import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    isDark: boolean;
    isPushed?: boolean;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
