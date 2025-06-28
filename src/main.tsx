import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {grey} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: grey[900], // or grey[800], grey[700], etc.
            paper: grey[800] || '#2c2c2c', // for cards/dialogs if needed
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);