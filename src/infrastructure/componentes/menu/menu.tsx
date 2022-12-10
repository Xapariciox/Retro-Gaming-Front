import { Link } from 'react-router-dom';

export function Menu() {
    const Home = [
        { id: 1, path: '', label: 'Menu' },
        { id: 2, path: 'Login', label: 'Login' },
        { id: 3, path: 'Register', label: 'Register' },
        { id: 4, path: 'seccionconsoles', label: 'seccionConsoles' },
    ];
    return (
        <>
            <ul className="ul-menu">
                {Home.map((item) => (
                    <li className="li-menu" key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Menu;
