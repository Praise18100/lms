import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
// import { buttonRecipe, toastSlot } from "./ui-recipe";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "primary",
      fontFamily: "DM Sans, system-ui, sans-serif",
      maxH: "vh",
      maxW: "vw",
      overflowX: "clip",
      "& *": {
        scrollbarWidth: "thin",
        scrollbarColor: "{colors.primary.500} transparent",
      },

      "& *::-webkit-scrollbar": {
        width: "8px",
        background: "transparent",
      },

      "& *::-webkit-scrollbar-thumb": {
        background: "{colors.primary.500/40}",
        borderRadius: "8px",
        minHeight: "24px",
        display: "none",
        cursor: "pointer",
      },

      "& *::-webkit-scrollbar-thumb:hover": {
        background: "color-mix(in srgb, {colors.primary.500} 80%, #000 20%)",
        display: "none",
      },

      "& *::-webkit-scrollbar-corner": {
        background: "transparent",
      },
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "DM Sans, system-ui, sans-serif" },
        heading: { value: "Tomato Grotesk, system-ui, sans-serif" },
        script: { value: "Abuget, cursive" },
        brand: { value: "ClashDisplay, sans-serif" },
      },
      colors: {
        primary: {
          50: { value: "var(--tenant-primary-50, #f3ebff)" },
          100: { value: "var(--tenant-primary-100, #e1c9ff)" },
          200: { value: "var(--tenant-primary-200, #cfa7ff)" },
          300: { value: "var(--tenant-primary-300, #bd85ff)" },
          400: { value: "var(--tenant-primary-400, #ab63ff)" },
          500: { value: "var(--tenant-primary-500, #9941ff)" },
          600: { value: "var(--tenant-primary-600, #7b2fff)" },
          700: { value: "var(--tenant-primary-700, #6b3dff)" },
          800: { value: "var(--tenant-primary-800, #4a25cc)" },
          900: { value: "var(--tenant-primary-900, #593AFF)" },
          950: { value: "var(--tenant-primary-950, #1a0880)" },
        },
        secondary: {
          50: { value: "var(--tenant-secondary-50, #ffe6f0)" },
          100: { value: "var(--tenant-secondary-100, #ffc0dd)" },
          200: { value: "var(--tenant-secondary-200, #ff99ca)" },
          300: { value: "var(--tenant-secondary-300, #ff73b7)" },
          400: { value: "var(--tenant-secondary-400, #ff4ca4)" },
          500: { value: "var(--tenant-secondary-500, #ff2591)" },
          600: { value: "var(--tenant-secondary-600, #f00f5d)" },
          700: { value: "var(--tenant-secondary-700, #d10a4f)" },
          800: { value: "var(--tenant-secondary-800, #b20541)" },
          900: { value: "var(--tenant-secondary-900, #930033)" },
          950: { value: "var(--tenant-secondary-950, #4d0019)" },
        },
        accent: {
          50: { value: "#f9ffe6" },
          100: { value: "#f0ffcc" },
          200: { value: "#e8ff99" },
          300: { value: "#e0ff66" },
          400: { value: "#d8ff33" },
          500: { value: "#cdf00f" },
          600: { value: "#b8d40d" },
          700: { value: "#a3b80b" },
          800: { value: "#8e9c09" },
          900: { value: "#798007" },
          950: { value: "#3d4003" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // --- Chakra color palette tokens ---
        primary: {
          solid: { value: "{colors.primary.900}" },
          contrast: { value: "#ffffff" },
          fg: {
            value: {
              _light: "{colors.primary.900}",
              _dark: "{colors.primary.200}",
            },
          },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.600}" },
          contrast: { value: "{colors.secondary.50}" },
          fg: {
            value: {
              _light: "{colors.secondary.700}",
              _dark: "{colors.secondary.200}",
            },
          },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.200}" },
          emphasized: { value: "{colors.secondary.300}" },
          focusRing: { value: "{colors.secondary.500}" },
        },
        accent: {
          solid: { value: "{colors.accent.500}" },
          contrast: { value: "{colors.accent.900}" },
          fg: {
            value: {
              _light: "{colors.accent.900}",
              _dark: "{colors.accent.300}",
            },
          },
          muted: { value: "{colors.accent.100}" },
          subtle: { value: "{colors.accent.200}" },
          emphasized: { value: "{colors.accent.300}" },
          focusRing: { value: "{colors.accent.500}" },
        },
        text: {
          primary: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.100}" },
          },
          secondary: {
            value: { _light: "{colors.gray.700}", _dark: "{colors.gray.300}" },
          },
          disabled: {
            value: { _light: "{colors.gray.500}", _dark: "{colors.gray.600}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" },
          },
        },
      },
    },
    // slotRecipes: {
    //   toast: toastSlot,
    // },
    // recipes: {
    //   button: buttonRecipe,
    // },
  },
});

export const system = createSystem(defaultConfig, config);
