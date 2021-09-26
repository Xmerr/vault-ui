import { createTheme } from '@mui/material/styles';
import styles from './themes.module.scss';

export const defaultTheme = createTheme({
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
