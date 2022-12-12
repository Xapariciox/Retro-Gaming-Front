import { Link } from 'react-router-dom';
import style from './menu.module.css';
export function Menu() {
    const Home = [
        { id: 1, path: '', label: 'Menu' },
        { id: 2, path: 'Login', label: 'Login' },
        { id: 3, path: 'Register', label: 'Register' },
        { id: 4, path: 'consolesPage', label: 'Consoles' },
        { id: 5, path: 'favorites', label: 'favorites' },
        { id: 6, path: 'profile', label: 'Profile' },
    ];
    return (
        <>
            <ul className={style.ulMenu}>
                {Home.map((item) => (
                    <li className={style.liMenu} key={item.id}>
                        <Link className={style.linkMenu} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Menu;
