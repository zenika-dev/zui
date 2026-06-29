export const primary = {
  50: "#FFF0F3",
  100: "#FAC5D2",
  200: "#ED95AD",
  400: "#D44272",
  500: "#C71E5B", // default
  700: "#A1104A",
  800: "#6F1133",
} as const;

// INFO colors
export const blue = {
  100: "#E9F2FF",
  300: "#549DFC",
  500: "#1D7AFC", // default
  700: "#0056C9",
  800: "#07326A",
} as const;

// ERROR colors
export const red = {
  100: "#FFEDEA",
  300: "#FA7463",
  500: "#ED4337", // default
  700: "#AF2A1A",
  800: "#601E17",
} as const;

// SUCCESS colors
export const green = {
  100: "#DFFCF1",
  300: "#46CE9A",
  500: "#22A06B", // default
  700: "#1D6E4F",
  800: "#18563E",
} as const;

// WARNING colors
export const yellow = {
  100: "#FFF3CE",
  300: "#FFDE7B",
  500: "#FFC20C", // default
  700: "#B68C10",
  800: "#5F480C",
} as const;

// ACCENT COLOR
export const orange = {
  300: "#FFA54B",
  500: "#D97008",
  700: "#B95C00",
} as const;

// ACCENT COLOR
export const purple = {
  300: "#CABFFD",
  500: "#9061F9",
  700: "#5521B5",
} as const;

// ACCENT COLOR
export const teal = {
  300: "#BFF0F5",
  500: "#1D9AAA",
  700: "#22565B",
} as const;

export const indigo = {
  100: "#F0F4FD",
  300: "#22565B",
  500: "#22565B",
  700: "#22565B",
} as const;

export const neutral = {
  0: "#FFFFFF",
  50: "#F9F9F9",
  100: "#F5F5F5",
  200: "#DEDEDE",
  300: "#D4D4D4",
  400: "#A4AFBF",
  500: "#A4AFBF",
  600: "#525252",
  700: "#465670",
  800: "#292F37",
  950: "#101010",
} as const;

export const semantic = {
  colorPrimary: primary[500],
  colorWarning: yellow[500],
  colorError: red[500],
  colorInfo: blue[500],
  colorSuccess: green[500],
  colorBgContainer: neutral[0],
  colorBgLayout: neutral[100],
  colorText: neutral[800],
  colorTextSecondary: neutral[500],
  colorTextDisabled: neutral[300],
  colorBorder: neutral[200],
  colorBorderSecondary: neutral[100],
} as const;
