import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </MantineProvider>
)
