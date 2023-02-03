import { Link } from 'react-router-dom';
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
                    className={`${style.headerNav} row nav g-0  justify-content-end justify-content-sm-between rounded-top border-bottom `}
                >
                    <div
                        className={`logo col-3 d-none  d-sm-flex align-items-center justify-content-center pe-5 ${style.divRol}  `}
                    >
                        <Link to={'home'}>
                            <img
                                src="../../../assets/logo.png"
                                width={60}
                                height={60}
                                alt=""
                            />
                        </Link>
                        <p className=" mb-0 text-center text-danger">
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
                                        <Link
                                            to={'/'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Home</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'products'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Products</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'favorites'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Favorites</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'/about'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>About</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'/contact'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>Contact</span>
                                            </div>
                                        </Link>
                                    </nav>

                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <Link
                                            to={'/cart'}
                                            className="text-decoration-none"
                                        >
                                            <img
                                                src="../../../assets/cart.png"
                                                alt=""
                                            />
                                            <span
                                                className={`${style.bubbleAlert}`}
                                            >
                                                {numberCart(
                                                    user.user.cart.length
                                                )}
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <Link to={'/profile'}>
                                            <img
                                                src={user.user.imageProfile}
                                                width={50}
                                                height={55}
                                                alt="ProfilePhoto"
                                                className="me-2 "
                                            />
                                        </Link>{' '}
                                        <Link
                                            to={'/login'}
                                            onClick={() => handleLogoutFinish()}
                                        >
                                            <img
                                                src="../../../assets/logout.png"
                                                alt=""
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
                                                <div className="">
                                                    <Link to={'/login'}>
                                                        <button className="btn btn-primary me-2">
                                                            Login
                                                        </button>
                                                    </Link>
                                                    <Link to={'register'}>
                                                        <button className="btn btn-secondary">
                                                            Sing up
                                                        </button>
                                                    </Link>
                                                </div>
                                                <li className="mt-1">
                                                    <a
                                                        href="https://drive.google.com/file/d/1NLkgzG9H2jsZy-If_KI9F1yyq3zeCvzA/view?usp=sharing"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Resume</span>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#aboutMe"
                                                        className="px-4 text-decoration-none d-flex  text-center"
                                                    >
                                                        <div className="w-100 d-inline">
                                                            <span>About</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2">
                                                    <a
                                                        href="#projects"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            {' '}
                                                            <span>
                                                                Projects
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2">
                                                    {' '}
                                                    <a
                                                        href="#contact"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            {' '}
                                                            <span>Contact</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2"></li>
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
                                        <Link
                                            to={'/'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Home</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'products'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Products</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'favorites'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                <span>Favorites</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'/about'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>About</span>
                                            </div>
                                        </Link>
                                        <Link
                                            to={'/contact'}
                                            className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                        >
                                            <div className="w-100">
                                                {' '}
                                                <span>Contact</span>
                                            </div>
                                        </Link>
                                    </nav>
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <Link
                                            to={'/cart'}
                                            className="text-decoration-none"
                                        >
                                            <img
                                                src="../../../assets/cart.png"
                                                alt=""
                                            />
                                            <span
                                                className={`${style.bubbleAlert}`}
                                            >
                                                {numberCart(
                                                    user.user.cart.length
                                                )}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <Link to={'/profile'}>
                                            <img
                                                src="../../../assets/Userwhitoutpick.png"
                                                alt="Profile"
                                                className="me-2"
                                                width={50}
                                                height={50}
                                            />
                                        </Link>{' '}
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
                                                <div className="">
                                                    <Link to={'/login'}>
                                                        <button className="btn btn-primary me-2">
                                                            Login
                                                        </button>
                                                    </Link>
                                                    <Link to={'register'}>
                                                        <button className="btn btn-secondary">
                                                            Sing up
                                                        </button>
                                                    </Link>
                                                </div>
                                                <li className="mt-1">
                                                    <a
                                                        href="https://drive.google.com/file/d/1NLkgzG9H2jsZy-If_KI9F1yyq3zeCvzA/view?usp=sharing"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            <span>Resume</span>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#aboutMe"
                                                        className="px-4 text-decoration-none d-flex  text-center"
                                                    >
                                                        <div className="w-100 d-inline">
                                                            <span>About</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2">
                                                    <a
                                                        href="#projects"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            {' '}
                                                            <span>
                                                                Projects
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2">
                                                    {' '}
                                                    <a
                                                        href="#contact"
                                                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                                    >
                                                        <div className="w-100">
                                                            {' '}
                                                            <span>Contact</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="mt-2"></li>
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
                                <Link
                                    to={'/'}
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        <span>Home</span>
                                    </div>
                                </Link>
                                <Link
                                    to={'products'}
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        <span>Products</span>
                                    </div>
                                </Link>
                                <Link
                                    to={'/about'}
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>About</span>
                                    </div>
                                </Link>
                                <Link
                                    to={'/contact'}
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>Contact</span>
                                    </div>
                                </Link>
                            </nav>
                            <div className="col-3 d-none d-md-flex justify-content-center align-items-center ">
                                <Link to={'/login'}>
                                    <button className="btn btn-primary me-2">
                                        Login
                                    </button>
                                </Link>
                                <Link to={'register'}>
                                    <button className="btn btn-secondary">
                                        Sing up
                                    </button>
                                </Link>
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
                                    <ul className="dropdown-menu ">
                                        <div className="">
                                            <Link to={'/login'}>
                                                <button className="btn btn-primary me-2">
                                                    Login
                                                </button>
                                            </Link>
                                            <Link to={'register'}>
                                                <button className="btn btn-secondary">
                                                    Sing up
                                                </button>
                                            </Link>
                                        </div>
                                        <li className="mt-1">
                                            <a
                                                href="https://drive.google.com/file/d/1NLkgzG9H2jsZy-If_KI9F1yyq3zeCvzA/view?usp=sharing"
                                                className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    <span>Resume</span>
                                                </div>
                                            </a>
                                            <a
                                                href="#aboutMe"
                                                className="px-4 text-decoration-none d-flex  text-center"
                                            >
                                                <div className="w-100 d-inline">
                                                    <span>About</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a
                                                href="#projects"
                                                className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    {' '}
                                                    <span>Projects</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            {' '}
                                            <a
                                                href="#contact"
                                                className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                            >
                                                <div className="w-100">
                                                    {' '}
                                                    <span>Contact</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mt-2"></li>
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
