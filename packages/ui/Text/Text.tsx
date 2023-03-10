import type { Interpolation, Theme } from "@emotion/react";
import { css, jsx } from "@emotion/react";
import type { PropsWithChildren } from "react";

import type { ColorToken } from "../constants/colors";
import { colors } from "../constants/colors";

import { lineClampStyle, typographyStyles } from "./styles";
import type { Typography } from "./types";

type TextProps = {
  typography: Typography;
  color?: ColorToken;
  lineClamp?: number;
  customCSS?: Interpolation<Theme>;
};

const tags: Record<Typography, string> = {
  h2: "h2",
  subtitle1: "span",
  subtitle2: "span",
  body1: "span",
  caption: "span",
};

export function Text({
  typography,
  color,
  lineClamp,
  customCSS,
  children,
}: PropsWithChildren<TextProps>) {
  const commonStyle = css`
    color: ${color ? colors[color] : "inherit"};
    word-break: keep-all;
  `;

  return jsx(
    tags[typography] || "span",
    {
      css: [
        commonStyle,
        typographyStyles[typography],
        lineClamp && lineClampStyle(lineClamp),
        customCSS,
      ],
    },
    children
  );
}
