import { SyntheticEvent } from 'react';
import Swal from 'sweetalert2';
import { ProductI } from '../../../features/products/types/products';
import { useUser } from '../../../features/users/hook/useUser';
import style from './consolesItem.module.css';
function ConsolesItem({ item }: { item: ProductI }) {
    const { handleAddFavorites, handleAddCart } = useUser();
    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAddFavorites(item);
        Swal.fire(`Felicidades! `, `Aacabas de añadir ${item.name}`, 'success');
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
            <li key={item.id} className={style.itemConsole}>
                <img className={style.imagen} src={item.image} />
                <button onClick={handleClick}>⭐</button>
                <h1 className={style.name}>{item.name}</h1>
                <p>{item.description}</p>
                <button>
                    <button onClick={handleClickCart}>addCart</button>
                </button>
            </li>
        </>
    );
}
export default ConsolesItem;
