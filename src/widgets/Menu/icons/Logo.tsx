import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg width="147" height="32" viewBox="0 0 147 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"{...props}>

<rect width="147" height="32" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0" transform="scale(0.00680272 0.03125)"/>
</pattern>
<image id="image0" width="147" height="32" xlinkHref="data:image/png;base64,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"/>
</defs>

    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
