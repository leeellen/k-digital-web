import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';

import Login from './pages/Login';
import PhotoEditor from './pages/PhotoEditor';
import VideoEditor from './pages/videoEditor/VideoEditor';

const router = createBrowserRouter([
    {
        path: '/',
        element: <VideoEditor />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/photo',
        element: <PhotoEditor />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
