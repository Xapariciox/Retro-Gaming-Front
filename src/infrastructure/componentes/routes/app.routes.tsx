import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../home/home';
import LoginPage from '../loginPage/loginPage';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage></LoginPage>}></Route>
                <Route path="" element={<Home></Home>}></Route>

                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
