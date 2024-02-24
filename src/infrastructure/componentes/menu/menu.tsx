import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useUser } from '../../../features/users/hook/useUser';
import style from './menu.module.css';
export function Menu() {
    const { user, handleLogoutFinish } = useUser();
    const numberCart = (cartLengt: number) => {
        if (!cartLengt) {
            return '';
        }
        return cartLengt > 9 ? '+9' : cartLengt;
    };
    return (
        <>
            <header id="header" className="container-fluid p-0">
                <div
                    className={`${style.headerNav} row nav g-0 justify-content-between   justify-content-md-between  rounded-top border-bottom `}
                >
                    <div
                        className={`logo col-6   col-md-3 d-flex   d-sm-flex align-items-center justify-content-center pe-md-5    `}
                    >
                       
                        <NavLink  to={'home'}>
                            <img
                                src="../../../assets/logo.png"
                                width={60}
                                height={60}
                                alt=""
                            />
                        </NavLink>
                        <p
                            className={`${style.retroGaming}  d-md-block mb-0  text-danger`}
                        >
                            RETRO-GAMING
                        </p>
                    </div>

                    {user.user ? (
                        <>
                            {user.user.imageProfile ? (
                                <>
                                    <nav
                                        className={`menu col-6 d-flex align-items-center justify-content-center  ${style.links} d-none d-md-flex`}
                                    >
                                        <NavLink
                                            to={'/'}
                                            className={({isActive})=> `px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                        >
                                            <div className="w-100">
                                                <span>Home</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'products'}
                                            className={({isActive})=> `px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                        >
                                            <div className="w-100">
                                                <span>Products</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'favorites'}
                                            className={({isActive})=> `px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                        >
                                            <div className="w-100">
                                                <span>Favorites</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'/about'}
                                            className={({isActive})=> `disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>About</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'/contact'}
                                            className={({isActive})=> `disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>Contact</span>
                                            </div>
                                        </NavLink>
                                    </nav>

                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <NavLink
                                            to={'/cart'}
                                            className={({isActive})=>  `${isActive ? "active": ""} ${style.cartLinkIcon} text-decoration-none `}
                                        >
                                            <img
                                                src="../../../assets/cart.png"
                                                alt=""
                                                className={`${style.cartIcon}`}
                                            />
                                            <span
                                                className={`${style.bubbleAlert}`}
                                            >
                                                {numberCart(
                                                    user.user.cart.length
                                                )}
                                            </span>
                                        </NavLink>
                                    </div>

                                    <div className=" d-none col-2 d-md-flex justify-content-center align-items-center">
                                        <NavLink to={'/profile'}                                  className={({isActive})=> `px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}>
                                            <img
                                                src={user.user.imageProfile}
                                                width={50} 
                                                height={55}
                                                alt="ProfilePhoto"
                                                className="me-2 "
                                            />
                                        </NavLink>{' '}
                                        <NavLink
                                            to={'/login'}
                                            className={({isActive})=> `px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active" : "no"} `}
                                            onClick={() => handleLogoutFinish()}
                                        >
                                            <img
                                                src="../../../assets/logout.png"
                                                alt=""
                                            />
                                        </NavLink>
                                    </div>

                                    <nav
                                        className={`${style.burguer} menu col-auto d-flex align-items-stretch d-block d-md-none  `}
                                    >
                                        <div
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <button
                                                className="btn btn-primary btn-lg dropdown-toggle dropdown-lg-toggle"
                                                type="button"
                                                id="drowup"
                                                data-bs-toggle="dropdown"
                                            ></button>
                                            <ul className={`${style.dropMenu} dropdown-menu`}>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                    className={ ({isActive})=> ` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${isActive ? "active": ""} ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Home</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/products'}
                                                        className={ ({isActive})=> ` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>
                                                                Products
                                                            </span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/favorites'}
                                                        className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>
                                                                Favorites
                                                            </span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                        className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>About</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                        className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Contact</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </>
                            ) : (
                                <>
                                    {' '}
                                    <nav
                                        className={`menu col-6 d-flex align-items-center justify-content-center  ${style.links} d-none d-md-flex`}
                                    >
                                        <NavLink
                                            to={'/'}
                                              className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                        >
                                            <div className="w-100">
                                                <span>Home</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'products'}
                                              className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                        >
                                            <div className="w-100">
                                                <span>Products</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'favorites'}
                                              className={({isActive})=>` pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                        >
                                            <div className="w-100">
                                                <span>Favorites</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'/about'}
                                         className={({isActive})=>` pt-2 pb-2 disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>About</span>
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={'/contact'}
                                         className={({isActive})=>` pt-2 pb-2 disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader} ${isActive ? "active": ""}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>Contact</span>
                                            </div>
                                        </NavLink>
                                    </nav>
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <NavLink 
                                            to={'/cart'}
                                            className={({isActive})=>  `${isActive ? "active": ""} ${style.cartLinkIcon} text-decoration-none `}
                                        >
                                            <img
                                                src="../../../assets/cart.png"
                                                alt=""
                                                className={`${style.cartIcon}`}
                                            />
                                            <span
                                                className={`${style.bubbleAlert}`}
                                            >
                                                {numberCart(
                                                    user.user.cart.length
                                                )}
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className=" d-none col-2 d-md-flex justify-content-center align-items-center">
                                        <NavLink                                  className={({isActive})=>  `${isActive ? "active": ""}${style.cartLinkIcon} text-decoration-none`} to={'/profile'}>
                                            <img
                                                src="../../../assets/Userwhitoutpick.png"
                                                alt="Profile"
                                                className="me-2"
                                                width={50}
                                                height={50}
                                            />
                                        </NavLink>{' '}
                                        <Link
                                            to={'/login'}
                                            onClick={() => handleLogoutFinish()}
                                        >
                                            <img
                                                src="../../../assets/logout.png"
                                                alt=""
                                                width={30}
                                                height={35}
                                            />
                                        </Link>
                                    </div>
                                    <nav
                                        className={`${style.burguer} menu col-auto d-flex align-items-stretch d-block d-md-none  `}
                                    >
                                        <div
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <button
                                                className="btn btn-primary btn-lg dropdown-toggle dropdown-lg-toggle"
                                                type="button"
                                                id="drowup"
                                                data-bs-toggle="dropdown"
                                            ></button>
                                            <ul className="dropdown-menu ">
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                        className={ ({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Home</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/products'}
                                                        className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>
                                                                Products
                                                            </span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/favorites'}
                                                        className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>
                                                                Favorites
                                                            </span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                        className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>About</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li className="mt-1">
                                                    <NavLink
                                                        to={'/'}
                                                        className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Contact</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {' '}
                            <nav
                                className={`menu col-6 d-flex align-items-center justify-content-center  ${style.links} d-none d-md-flex`}
                            >
                                <NavLink
                                    to={'/'}
                                    className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        <span>Home</span>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={'products'}
                                    className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        <span>Products</span>
                                    </div>
                                </NavLink>

                                <NavLink
                                    to={'/about'}
                                    className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2  disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>About</span>
                                    </div>
                                </NavLink>
                                <NavLink
                                    to={'/contact'}
                                    className={({isActive})=> `${isActive ? "active" : ""} pt-2 pb-2 disabled px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>Contact</span>
                                    </div>
                                </NavLink>
                            </nav>
                            <div className="col-3 d-none d-md-flex justify-content-center align-items-center ">
                                <NavLink to={'/login'}>
                                    <button className="btn btn-danger me-2">
                                        Login
                                    </button>
                                </NavLink>
                                <NavLink to={'register'}>
                                    <button className="btn btn-secondary">
                                        Sign up
                                    </button>
                                </NavLink>
                            </div>
                            {/* menu hamburguesa */}
                            <nav
                                className={`${style.burguer} menu col-auto d-flex align-items-stretch d-block d-md-none  `}
                            >
                                <div
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <button
                                        className="btn btn-primary btn-lg dropdown-toggle dropdown-lg-toggle"
                                        type="button"
                                        id="drowup"
                                        data-bs-toggle="dropdown"
                                    ></button>
                                    <ul className={`dropdown-menu ${style.dropMenu}`}>
                                        <div className="  d-flex flex-column  align-items-center gap-2 ">
                                            <NavLink to={'/login'}>
                                                <button className="btn w-75 w-100 btn-danger me-2">
                                                    Login
                                                </button>
                                            </NavLink>
                                            <NavLink to={'register'}>
                                                <button className="btn w-75 w-100 btn-secondary">
                                                Sign up
                                                </button>
                                            </NavLink>
                                        </div>

                                        <li className="mt-1">
                                            <NavLink
                                                to={'/'}
                                                className={({isActive})=> `${isActive ? "active" : ""} px-4 pt-2 pb-2 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    <span>Home</span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className="mt-1">
                                            <NavLink
                                                to={'/products'}
                                                className={({isActive})=> `${isActive ? "active" : ""} px-4 pt-2 pb-2 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    <span>Products</span>
                                                </div>
                                            </NavLink>
                                        </li>

                                        <li className="mt-1">
                                            <NavLink
                                                to={'/'}
                                                className={({isActive})=> `${isActive ? "active" : ""} px-4 pt-2 pb-2 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    <span>About</span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className="mt-1">
                                            <NavLink
                                                to={'/'}
                                                className={({isActive})=> `${isActive ? "active" : ""} px-4 pt-2 pb-2 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    <span>Contact</span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* menu hamburguesa */}
                        </>
                    )}
                </div>
            </header>
        </>
    );
}

export default Menu;
