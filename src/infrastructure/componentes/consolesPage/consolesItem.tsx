import { SyntheticEvent } from 'react';
import Swal from 'sweetalert2';
import { ProductI } from '../../../features/products/types/products';
import { useUser } from '../../../features/users/hook/useUser';
import style from './consolesItem.module.css';
function ConsolesItem({ item }: { item: ProductI }) {
    const { handleAddFavorites, handleAddCart, user } = useUser();
    const handleClick = (ev: SyntheticEvent) => {
        if (user.user?.favorites.find((product) => product.id === item.id)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `you have already added ${item.name} to your favorites`,
            });
            return;
        }
        ev.preventDefault();
        handleAddFavorites(item);
        Swal.fire(
            `Congratulations! `,
            `you have just successfully added ${item.name}`,
            'success'
        );
    };
    const handleClickLogout = () => {
        Swal.fire(
            `Please login `,
            `To perform this option, please login`,
            'error'
        );
    };
    const handleClickCart = (ev: SyntheticEvent) => {
        if (user.user?.cart.find((product) => product.product.id === item.id)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `you have already added ${item.name} to your Cart`,
            });
            return;
        }
        Swal.fire(
            `Succes `,
            `you have just successfully added "${item.name}" to your cart`,
            'success'
        );
        ev.preventDefault();
        handleAddCart({
            isBuy: true,
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
                    <h1 className={style.price}>{item.price} €</h1>

                    <button className={style.cart} onClick={handleClickCart}>
                        🛒
                    </button>
                </li>
            ) : (
                <li key={item.id} className={style.itemConsole}>
                    <p> Stock Restante: {item.stock}</p>
                    <div className={style.imagendiv}>
                        <img className={style.imagen} src={item.image} />
                        <button onClick={handleClickLogout}>💖</button>
                    </div>

                    <h1 className={style.name}>{item.name}</h1>
                    <h1 className={style.price}>{item.price} €</h1>
                </li>
            )}
        </>
    );
}
export default ConsolesItem;
