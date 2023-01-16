import { useUser } from '../../../features/users/hook/useUser';
import style from './favorites.module.css';

function Favorites() {
    const { handleDeleteFavorites } = useUser();
    const { user } = useUser();
    return (
        <>
            <h1>Favorites</h1>
            <ul className={style.ListConsoles}>
                <div className={style.containerConsoles}>
                    {user.user?.favorites.map((item) => (
                        <li key={item.id} className={style.itemConsole}>
                            <p> Stock Restante: {item.stock}</p>
                            <div className={style.imagendiv}>
                                <img
                                    className={style.imagen}
                                    src={item.image}
                                />
                                <button
                                    onClick={() => handleDeleteFavorites(item)}
                                >
                                    ❌
                                </button>
                            </div>

                            <h1 className={style.name}>{item.name}</h1>
                        </li>
                    ))}
                </div>
            </ul>
        </>
    );
}
export default Favorites;
