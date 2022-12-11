import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../loginPage/loginPage';
import RegisterPage from '../registerPage/registerPage';
import { HomePage } from '../homePage/home';
import SeccionConsoles from '../consolesPage/consolesPage';
import Profile from '../profile/profile';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="" element={<HomePage></HomePage>}></Route>
                <Route path="login" element={<LoginPage></LoginPage>}></Route>
                <Route
                    path="register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>
                <Route
                    path="seccionconsoles"
                    element={<SeccionConsoles></SeccionConsoles>}
                ></Route>
                <Route path="profile" element={<Profile></Profile>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
