import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

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
    black: '#000000'
})

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </ThemeProvider>
)
