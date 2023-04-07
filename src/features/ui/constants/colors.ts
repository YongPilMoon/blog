export const colors = {
  black: "#000000",
  dim: "rgba(51, 55, 61, 0.5)",
  gray10: "#F8F9FB",
  gray20: "#f2f3f7",
  gray30: "#c2c6ce",
  gray35: "#959ca6",
  gray40: "#50555c",
  gray50: "#33373d",
  liner50: "#00c3cc",
  white: "#ffffff",
} as const;

export type ColorToken = keyof typeof colors;
