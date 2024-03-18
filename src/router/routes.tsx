// src/routes.js
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PrivateRouteWrapper from './components/PrivateRouteWrapper';
import PublicRouteWrapper from './components/PublicRouteWrapper';
import { Header } from '../pages/layout';
import Home from '../pages/home/Home';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PrivateRouteWrapper />}>
            </Route>
            <Route element={<PublicRouteWrapper />}>
                <Route path="/" element={<Header />} >
                    <Route index element={<Home />} />
                </Route>
            </Route>
        </>
    )
);
