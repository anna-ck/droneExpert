import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#134c13'
        },
        secondary: {
            main: '#DC143C'
        }
    },
    typography: {
        fontFamily: [
            'Open Sans', 
            'sans-serif'
        ].join(','),
        subtitle2: {
            lineHeight: 2.1,
            fontSize: '1rem'
        }
    },
  });

export default theme