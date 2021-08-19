import { createTheme } from '@material-ui/core/styles';
import styles from './themes.module.scss';

export const defaultTheme = createTheme({
    typography: {
        htmlFontSize: 8,
    },
    palette: {
        primary: {
            main: styles.primary,
            contrastText: '#fff',
        },
        secondary: {
            main: styles.secondary,
            contrastText: '#fff',
        },
    },
});
