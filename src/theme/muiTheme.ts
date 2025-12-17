import { createTheme, type ThemeOptions } from '@mui/material/styles';

const getThemeOptions = (mode: 'light' | 'dark' | 'contrast'): ThemeOptions => {
  if (mode === 'light') {
    return {
      palette: {
        mode: 'light',
        primary: {
          main: '#1a73e8',
        },
        secondary: {
          main: '#f9ab00',
        },
        background: {
          default: '#f0f4f8',
          paper: '#ffffff',
        },
        text: {
          primary: '#202124',
          secondary: '#5f6368',
        },
      },
    };
  }
  
  if (mode === 'dark') {
    return {
      palette: {
        mode: 'dark',
        primary: {
          main: '#8ab4f8',
        },
        secondary: {
          main: '#fdb60d',
        },
        background: {
          default: '#202124',
          paper: '#2d2e31',
        },
        text: {
          primary: '#e8eaed',
          secondary: '#9aa0a6',
        },
      },
    };
  }
  
  // High contrast theme - WCAG AAA compliant
  return {
    palette: {
      mode: 'dark',
      primary: {
        main: '#00ffff', // Cyan - high visibility
        contrastText: '#000000',
      },
      secondary: {
        main: '#ffff00', // Yellow - high visibility
        contrastText: '#000000',
      },
      background: {
        default: '#000000', // Pure black
        paper: '#000000',
      },
      text: {
        primary: '#ffffff', // Pure white
        secondary: '#ffff00', // Yellow for secondary text
        disabled: '#00ffff', // Cyan for disabled
      },
      divider: '#ffffff', // White dividers for maximum contrast
      action: {
        hover: '#1a1a1a', // Slight grey for hover
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: '2px solid #ffffff', // Bold white borders
          },
        },
      },
    },
  };
};

export const createAppTheme = (mode: 'light' | 'dark' | 'contrast') => {
  return createTheme(getThemeOptions(mode));
};
