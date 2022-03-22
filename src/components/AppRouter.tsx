import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate(RouteNames.EVENT)
        } else {
            return navigate(RouteNames.LOGIN)
        }
    }, [isAuth])

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component
                        />}
                    />)}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component
                        />}
                    />)}
            </Routes>
    )
}

export default AppRouter