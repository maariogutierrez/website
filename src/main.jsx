import '@mantine/core/styles.css';
import '@fontsource-variable/archivo/wdth.css';

import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

const theme = createTheme({
    colors: {
        cobalt: [
            '#eef1fc', '#dde3fa', '#b9c4f4', '#93a3ee', '#6e82e7',
            '#4862dd', '#1f3bd4', '#1a32b4', '#152995', '#102075'
        ]
    },
    primaryColor: 'cobalt',
    primaryShade: 6,
    defaultRadius: 0,
    black: '#000000',
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
    headings: {
        fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: '600'
    }
})

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </ThemeProvider>
)
