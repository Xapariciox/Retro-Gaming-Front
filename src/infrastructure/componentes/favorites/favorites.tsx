import { useUser } from '../../../features/users/hook/useUser';
import style from './favorites.module.css';

function Favorites() {
    const { handleDeleteFavorites } = useUser();
    const { user } = useUser();
    return (
        <>
            <h1>Favorites</h1>
            <ul className={style.ListConsoles}>
                {user.user?.favorites.map((item) => (
                    <li className={style.itemConsole} key={item.id}>
                        <div className={style.divArcitulo}>
                            <div>{item.name}</div>
                            <button onClick={() => handleDeleteFavorites(item)}>
                                ❌
                            </button>
                            <div>
                                <img
                                    className={style.imagen}
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Favorites;
