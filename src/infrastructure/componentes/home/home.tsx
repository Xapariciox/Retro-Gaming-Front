import { Link } from 'react-router-dom';

export function Home() {
    const Home = [
        { id: 1, path: '', label: 'Home' },
        { id: 2, path: 'Login', label: 'Login' },
        { id: 3, path: 'Register', label: 'Register' },
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
export default Home;
