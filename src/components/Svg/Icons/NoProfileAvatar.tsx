import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <image id="profile-user" width="32" height="32" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQlSURBVHgB1ZndUdtAEMf/d3ImeUliVxDlnQ9TAaSCQAVABUAFQAWQCjAVxKkApwK+nGecCmxDHpKxdJfdk43kL1l7tpnhN5OYsXW6v1Z7e7t7CvPSbFcRYwsqWIe2VfqmDIswc0UHUDfu08Q/EaCBlcoN5kDBh+t2iFJpFzCHTqR81hb910AvPsVGpQUhMtFObHAB2C0sCqVqUvHFRF+3y2TZA7LsCZaGPsHq+9MiV84WzdZ9o69G/HQ5sNv0zJdZVtd5P+K+vYWSvn4RwQzPw/PdtbfzLptu6eafXdi4BjkULWwr+XRTbMEHpfaw8uFy4k8TB/CTKv0dEixHBHNK4a9Or7czcr89eqnHNFsICZFzlcbo1+OiXYSgVyQJZdZcktjDMbHD9y0j0Oc04y6K0yHhG6M+Pi662X2Q+bCtY7W8U/jy+0d6g3a78PXJ4tzIGmR4If56OhYJZpeI7BEkRPE+nv290BwhqTzMfpWKZrcwwjisaUuW7mhsMWMuRWM0rQfW9zztgDfBMaT0hJOns9Yhxe3Eg+EMP4W1e5Dy9t0DfIg40kih1KFv7US0j5WZf3+78KO4T2fR2Es+HN4JUAg/Qvig9YH7IJNXvbdpTXm0DwGq8KPMerX3xG5yLdkoUjga+EJ6SXSwCV8sWey2fSgaI90LRlF6nX1aXnlk0foMzcdiFuckzMyZkytUS2QuX/9KsbaG+6cQUXQ5cbNxeUeJLBzL3sokFMoK912LxdFxtR8XsIr+tvQWueBVLteY741mWLToF0HjFaKTcv5V0SmR3/ltqQ5L/mt/uAdXBe9jKExq9dW7DIO9KVEIuqWwJY0g1CEyR1gdL4UK0KB/5y75CajKl5Zg1nZ1IkDEjavd/ASncGiMqSKRzm/R0PS6GoIBVKmYndxaUALfhw1gBevKsOiNStIcLDbCq/eWizOAKdRZcg9Hevshz3wrMKSDtUoNyyB2lcxsw+nEKxLREWozB9CqxbJw1laz799L3ojuD2q57TcPq1pYJib+nfu7IsP2XTPdEZPSPmeQCrFMdPAp9/de6vepaPcUeQuCSjLu+i8DV7DmlHxmOAAM5x4RBf3c8EP9vWvqpC6SQWd2GqxnvXKS/WpYNC+ImOLmtJWctGKvKHc+djnyPPD4u6czknCF6WnrQM8Qk7um/PTJzabD+YaZ0iWdJTY5VZh9XmNpI1ur1Mennga3Z5W+wGw6tEjrLvHXtCVPOrlyeQYX0FSPFi0IrNmfti/kH18kfeoLSKuObLorL2J5h9zJy22Knbn4ZGM+8KKL5z1zYfgGax8/F84PvOH1Md5An4T8HDHACbmMX5NmIlRIRHZ/8eeIowzEQ296uk3HJWm8L3ikuX6is3AvkFtrWnGnquwewqownYFOuriks5QQWaqSjGvEz5V8/QePSKSRYPCpnwAAAABJRU5ErkJggg=="/>

    </Svg>
  );
};

export default Icon;
