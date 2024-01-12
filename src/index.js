import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import EventByAntd from './pages/event/EventByAntd';
import EventNoticeByAntd from './pages/event/EventNoticeByAntd';
import EventByMui from './pages/event/EventByMui';
import EventNoticeByMui from './pages/event/EventNoticeByMui';
import EventByBootstrap from './pages/event/EventByBootstrap';
import EventNoticeByBootstrap from './pages/event/EventNoticeByBootstrap';
import BeerByAntd from './pages/beer/BeerByAntd';
import BeerByMui from './pages/beer/BeerByMui';
import BeerByBootstrap from './pages/beer/BeerByBootstrap';
import VideoEditor from './pages/videoEditor/VideoEditor';

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
        path: '/event/mui/notice',
        element: <EventNoticeByMui />,
    },
    {
        path: '/event/bootstrap',
        element: <EventByBootstrap />,
    },
    {
        path: '/event/bootstrap/notice',
        element: <EventNoticeByBootstrap />,
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
        path: '/video',
        element: <VideoEditor />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
