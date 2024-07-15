import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
      light: '#EDF7FA'
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D'
    }
  },
  typography: {
    fontFamily: "Heebo, sans-serif",
    h3: {
      fontSize: '2rem',
      
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width:900px)': {
            maxWidth: '860px',
          }
        },
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width:600px)': {
            maxWidth: '680px',
          }
        }
      },
      defaultProps: {
        maxWidth: 'md'
      },
      variants: []
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: '#000',
          '&:hover,&.active': {
            color: '#FF6464'
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary'},
          style: {color: 'white'}
        }
      ]
    },
    MuiChip: {
      variants: [
        {
          props: {color: 'secondary'},
          style: {
            color: '#fff',
            backgroundColor: '#142850'
          }
        }
      ]
    }
  }
});

theme = responsiveFontSizes(theme);