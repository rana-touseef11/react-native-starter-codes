// Full Tailwind-style color scale
export const themeColors = {
  primary: {
    100: "#F5F8FF",
    200: "#EBF4FF",
    300: "#C3D9FF",
    400: "#9BBFFF",
    500: "#0286FF", // ✅ Main primary
    600: "#6A85E6",
    700: "#475A99",
    800: "#364573",
    900: "#242B4D",
  },
  secondary: {
    100: "#FFF8EB",
    200: "#FFF3DB",
    300: "#FFE4B3",
    400: "#FFD480",
    500: "#FACC15", // Main secondary
    600: "#E6B91A",
    700: "#997D12",
    800: "#735E0E",
    900: "#4D3F09",
  },
  background: "#F3F4F6",
  surface: "#FFFFFF",
  onPrimary: "#FFFFFF",
  onSurface: "#111827",
  card: "#FFFFFF",
  button: "#0286FF",
};

// Convenience getters for main shades (Paper-friendly)
export const mainColors = {
  primary: themeColors.primary[500],
  secondary: themeColors.secondary[500],
  background: themeColors.background,
  surface: themeColors.surface,
  onPrimary: themeColors.onPrimary,
  onSurface: themeColors.onSurface,
  card: themeColors.card,
  button: themeColors.button,
};
