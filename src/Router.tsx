import { Routes, Route } from 'react-router-dom';
import { DefaultLayot } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { History } from './pages/History';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayot />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    );
}