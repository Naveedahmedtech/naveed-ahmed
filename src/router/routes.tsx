// src/routes.js
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PrivateRouteWrapper from './components/PrivateRouteWrapper';
import PublicRouteWrapper from './components/PublicRouteWrapper';
import { Header } from '../pages/layout';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<PrivateRouteWrapper />}>
            </Route>
            <Route element={<PublicRouteWrapper />}>
                <Route path="/" element={<Header />} >

                </Route>
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
            </Route>
        </>
    )
);
