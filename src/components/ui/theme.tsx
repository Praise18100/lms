import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

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
          50: { value: "var(--lms-primary-50, #f3ebff)" },
          100: { value: "var(--lms-primary-100, #e1c9ff)" },
          200: { value: "var(--lms-primary-200, #cfa7ff)" },
          300: { value: "var(--lms-primary-300, #bd85ff)" },
          400: { value: "var(--lms-primary-400, #ab63ff)" },
          500: { value: "var(--lms-primary-500, #9941ff)" },
          600: { value: "var(--lms-primary-600, #7b2fff)" },
          700: { value: "var(--lms-primary-700, #6b3dff)" },
          800: { value: "var(--lms-primary-800, #4a25cc)" },
          900: { value: "var(--lms-primary-900, #593AFF)" },
          950: { value: "var(--lms-primary-950, #1a0880)" },
        },
        secondary: {
          50: { value: "var(--lms-secondary-50, #fffbea)" },
          100: { value: "var(--lms-secondary-100, #fff3c4)" },
          200: { value: "var(--lms-secondary-200, #fce588)" },
          300: { value: "var(--lms-secondary-300, #fadb5f)" },
          400: { value: "var(--lms-secondary-400, #f7c948)" },
          500: { value: "var(--lms-secondary-500, #f0b429)" },
          600: { value: "var(--lms-secondary-600, #de911d)" },
          700: { value: "var(--lms-secondary-700, #cb6e17)" },
          800: { value: "var(--lms-secondary-800, #b44d12)" },
          900: { value: "var(--lms-secondary-900, #8d2b0b)" },
          950: { value: "var(--lms-secondary-950, #4a1605)" },
        },

        accent: {
          50: { value: "var(--lms-accent-50, #ecfdf5)" },
          100: { value: "var(--lms-accent-100, #d1fae5)" },
          200: { value: "var(--lms-accent-200, #a7f3d0)" },
          300: { value: "var(--lms-accent-300, #6ee7b7)" },
          400: { value: "var(--lms-accent-400, #34d399)" },
          500: { value: "var(--lms-accent-500, #10b981)" },
          600: { value: "var(--lms-accent-600, #059669)" },
          700: { value: "var(--lms-accent-700, #047857)" },
          800: { value: "var(--lms-accent-800, #065f46)" },
          900: { value: "var(--lms-accent-900, #064e3b)" },
          950: { value: "var(--lms-accent-950, #022c22)" },
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
          muted: { value: "{colors.primary.50}" },
          subtle: { value: "{colors.primary.100}" },
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
          muted: { value: "{colors.secondary.50}" },
          subtle: { value: "{colors.secondary.100}" },
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
        border: {
          default: { value: "{colors.primary.900}" },
          subtle: { value: "{colors.primary.900}" },
          strong: { value: "{colors.primary.900}" },
          focus: { value: "{colors.primary.500}" },
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
  },
});

export const system = createSystem(defaultConfig, config);
