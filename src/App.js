import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import PhotoEditor from './pages/PhotoEditor';
import VideoEditor from './pages/videoEditor/VideoEditor';

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
