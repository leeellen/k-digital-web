import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import EventByAntd from './pages/event/EventByAntd';
import EventByMui from './pages/event/EventByMui';
import EventByBootstrap from './pages/event/EventByBootstrap';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/event/antd',
        element: <EventByAntd />,
    },
    {
        path: '/event/mui',
        element: <EventByMui />,
    },
    {
        path: '/event/bootstrap',
        element: <EventByBootstrap />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
