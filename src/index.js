import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import EventByAntd from './pages/event/EventByAntd';
import EventNoticeByAntd from './pages/event/EventNoticeByAntd';
import EventByMui from './pages/event/EventByMui';
import EventByBootstrap from './pages/event/EventByBootstrap';
import BeerByAntd from './pages/beer/BeerByAntd';
import BeerByMui from './pages/beer/BeerByMui';
import BeerByBootstrap from './pages/beer/BeerByBootstrap';
import VideoEditorByAntd from './pages/videoEditor/VideoEditorByAntd';
import VideoEditorByMui from './pages/videoEditor/VideoEditorByMui';
import VideoEditorByBootstrap from './pages/videoEditor/VideoEditorByBootstrap';

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
        path: '/event/antd/notice',
        element: <EventNoticeByAntd />,
    },
    {
        path: '/event/mui',
        element: <EventByMui />,
    },
    {
        path: '/event/bootstrap',
        element: <EventByBootstrap />,
    },
    {
        path: '/beer/antd',
        element: <BeerByAntd />,
    },
    {
        path: '/beer/mui',
        element: <BeerByMui />,
    },
    {
        path: '/beer/bootstrap',
        element: <BeerByBootstrap />,
    },
    {
        path: '/video/antd',
        element: <VideoEditorByAntd />,
    },
    {
        path: '/video/mui',
        element: <VideoEditorByMui />,
    },
    {
        path: '/video/bootstrap',
        element: <VideoEditorByBootstrap />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
