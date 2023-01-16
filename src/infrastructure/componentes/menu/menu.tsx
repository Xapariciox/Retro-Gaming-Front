import { Link } from 'react-router-dom';
import { useUser } from '../../../features/users/hook/useUser';
import style from './menu.module.css';
export function Menu() {
    const { user } = useUser();
    const home = [
        { id: 1, path: 'Register', label: 'Register' },
        { id: 2, path: 'Login', label: 'Login' },
        { id: 3, path: 'consolesPage', label: 'Consoles' },
    ];
    const homeLogin = [
        { id: 1, path: 'consolesPage', label: 'Consoles' },
        { id: 2, path: 'favorites', label: 'Favorites' },
        { id: 3, path: 'profile', label: 'Profile' },
    ];

    return (
        <>
            {user.user ? (
                <>
                    <ul className={style.ulMenu}>
                        <Link to={''}>
                            <img
                                className={style.logo}
                                width={'70px'}
                                src="../../../assets/logo.png"
                                alt="menu/logo.png"
                            />
                        </Link>
                        <nav className={style.nav}>
                            {homeLogin.map((item) => (
                                <li className={style.liMenu} key={item.id}>
                                    <Link
                                        className={style.linkMenu}
                                        to={item.path}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </nav>

                        <Link to={'cart'}>
                            <img
                                width={'70px'}
                                src="../../../assets/cart.png"
                                alt="cart"
                            />
                        </Link>
                        <div className={style.logout}>
                            <Link to={'profile'}>
                                <img
                                    width={'70px'}
                                    src={user.user.imageProfile}
                                    alt="Imagen Profile"
                                />
                            </Link>
                            <a className={style.link} href="/login">
                                <img
                                    width={'50px'}
                                    src="../../../assets/logout.png"
                                    alt="cart"
                                />
                            </a>
                        </div>
                    </ul>
                </>
            ) : (
                <>
                    <ul className={style.ulMenu}>
                        <Link to={''}>
                            <img
                                width={'70px'}
                                src="../../../assets/logo.png"
                                alt="menu/logo.png"
                            />
                        </Link>
                        {home.map((item) => (
                            <li className={style.liMenu} key={item.id}>
                                <Link className={style.linkMenu} to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <div></div>
                    </ul>
                </>
            )}
        </>
    );
}
export default Menu;
