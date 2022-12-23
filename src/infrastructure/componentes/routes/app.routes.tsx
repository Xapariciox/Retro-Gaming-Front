import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../loginPage/loginPage';
import RegisterPage from '../registerPage/registerPage';
import { HomePage } from '../homePage/home';
import Profile from '../profile/profile';
import SeccionConsoles from '../consolesPage/consolesSeccion';
import Favorites from '../favorites/favorites';
import Cart from '../cart/cart';

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
                    path="consolesPage"
                    element={<SeccionConsoles></SeccionConsoles>}
                ></Route>
                <Route
                    path="favorites"
                    element={<Favorites></Favorites>}
                ></Route>
                <Route path="profile" element={<Profile></Profile>}></Route>
                <Route path="cart" element={<Cart></Cart>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
