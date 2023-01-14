import { Link } from 'react-router-dom';
import { useUser } from '../../../features/users/hook/useUser';
import style from './menu.module.css';
export function Menu() {
    const { user } = useUser();
    const home = [
        { id: 1, path: '', label: 'Menu' },
        { id: 2, path: 'Register', label: 'Register' },
        { id: 3, path: 'Login', label: 'Login' },
        { id: 4, path: 'consolesPage', label: 'Consoles' },
    ];
    const homeLogin = [
        { id: 1, path: '', label: 'Menu' },
        { id: 4, path: 'consolesPage', label: 'Consoles' },
        { id: 5, path: 'favorites', label: 'favorites' },
        { id: 6, path: 'profile', label: 'Profile' },
        { id: 7, path: 'cart', label: 'cart' },
    ];

    return (
        <>
            {user.user ? (
                <>
                    <ul className={style.ulMenu}>
                        {homeLogin.map((item) => (
                            <li className={style.liMenu} key={item.id}>
                                <Link className={style.linkMenu} to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <img
                            width={'70px'}
                            src={user.user.imageProfile}
                            alt="Imagen Profile"
                        />
                    </ul>
                </>
            ) : (
                <>
                    <ul className={style.ulMenu}>
                        {home.map((item) => (
                            <li className={style.liMenu} key={item.id}>
                                <Link className={style.linkMenu} to={item.path}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}
export default Menu;
