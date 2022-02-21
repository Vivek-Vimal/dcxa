import { DefaultTheme } from "styled-components";
import { SvgProps } from "../../components/Svg/types";
export interface Props extends SvgProps {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    isDark: boolean;
    isPushed?: boolean;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed?: boolean | undefined;
}, never>;
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntry, LinkLabel };
