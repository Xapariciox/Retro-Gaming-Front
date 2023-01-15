import { SyntheticEvent } from 'react';
import Swal from 'sweetalert2';
import { ProductI } from '../../../features/products/types/products';
import { useUser } from '../../../features/users/hook/useUser';
import style from './consolesItem.module.css';
function ConsolesItem({ item }: { item: ProductI }) {
    const { handleAddFavorites, handleAddCart, user } = useUser();
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAddFavorites(item);
        Swal.fire(`Felicidades! `, `Aacabas de añadir ${item.name}`, 'success');
    };
    const handleClickLogout = () => {
        Swal.fire(
            `Registrate `,
            `Para añadir Este articulo a favoritos Haz login por favor`,
            'error'
        );
    };
    const handleClickCart = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAddCart({
            isBuy: false,
            product: item,
            amount: 1,
        });
    };

    return (
        <>
            {user.user ? (
                <li key={item.id} className={style.itemConsole}>
                    <p> Stock Restante: {item.stock}</p>
                    <div className={style.imagendiv}>
                        <img className={style.imagen} src={item.image} />
                        <button onClick={handleClick}>💖</button>
                    </div>

                    <h1 className={style.name}>{item.name}</h1>
                    <div>
                        <h2>Descripcion</h2>
                        <p>{item.description}</p>
                    </div>

                    <button onClick={handleClickCart}>🛒</button>
                </li>
            ) : (
                <li key={item.id} className={style.itemConsole}>
                    <p> Stock Restante: {item.stock}</p>
                    <div className={style.imagendiv}>
                        <img className={style.imagen} src={item.image} />
                        <button onClick={handleClickLogout}>💖</button>
                    </div>

                    <h1 className={style.name}>{item.name}</h1>
                    <div>
                        <h2>Descripcion</h2>
                        <p>{item.description}</p>
                    </div>
                </li>
            )}
        </>
    );
}
export default ConsolesItem;
