import React from 'react';
import { createRoot } from 'react-dom/client';

import MainPage from './pages/mainPage/index';

import './styles.css';
import './variables.css';

const App = () => (
    <MainPage />
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);