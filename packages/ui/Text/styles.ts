import type { Interpolation, Theme } from "@emotion/react";
import { css } from "@emotion/react";

import type { Typography } from "./types";

const fontFamilyStyle = css`
  font-family: "SF Pro Text", sans-serif;
`;

export const lineClampStyle = (lineClamp: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp || "auto"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const typographyStyles: Readonly<
  Record<Typography, Interpolation<Theme>>
> = {
  h2: [
    fontFamilyStyle,
    css`
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    `,
  ],
  subtitle1: [
    fontFamilyStyle,
    css`
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
    `,
  ],
  subtitle2: [
    fontFamilyStyle,
    css`
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
    `,
  ],
  body1: [
    fontFamilyStyle,
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
    `,
  ],
  caption: [
    fontFamilyStyle,
    css`
      font-weight: 400;
      font-size: 13px;
      line-height: 13px;
    `,
  ],
};
