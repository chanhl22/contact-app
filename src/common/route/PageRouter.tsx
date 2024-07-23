import React from 'react';
import {BrowserRouter, Route, RouteProps, Routes} from 'react-router-dom';

import routeConfigs from './routeConfigs';

const PageRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routeConfigs.map((route: RouteProps) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default PageRouter;
