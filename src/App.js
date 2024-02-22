import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import evnet_thumb from './assets/images/evnet_thumb.png';
import beer_thumb from './assets/images/beer_thumb.png';
import video_thumb from './assets/images/video_thumb.jpg';

import antdLogo from './assets/icons/antd.svg';
import muiLogo from './assets/icons/mui.svg';
import ffmpeg from './assets/icons/ffmpeg.png';
import bootStrapLogo from './assets/icons/bootStrapLogo.svg';
import Layout from './components/Layout';
import VideoEditor from './pages/videoEditor/VideoEditor';
import Login from './pages/Login';
import PhotoEditor from './pages/PhotoEditor';

const cardList = [
    {
        img: evnet_thumb,
        title: '이벤트 페이지',
        children: [
            { img: antdLogo, to: '/event/antd', library: 'Antd' },
            { img: muiLogo, to: '/event/mui', library: 'Mui' },
            { img: bootStrapLogo, to: '/event/bootstrap', library: 'BootStrap' },
        ],
    },
    {
        img: beer_thumb,
        title: '주류 큐레이션',
        children: [
            { img: antdLogo, to: '/beer/antd', library: 'Antd' },
            { img: muiLogo, to: '/beer/mui', library: 'Mui' },
            { img: bootStrapLogo, to: '/beer/bootstrap', library: 'BootStrap' },
        ],
    },
    {
        img: video_thumb,
        title: '비디오 에디터',
        children: [{ img: ffmpeg, to: '/video' }],
    },
];

function App() {
    return (
        <article className="app__layout">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<VideoEditor />} />
                    <Route path="/photo" element={<PhotoEditor />} />
                </Route>
            </Routes>
        </article>
    );
}

export default App;
