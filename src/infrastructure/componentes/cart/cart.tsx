import { useUser } from '../../../features/users/hook/useUser';
import { userCart } from '../../../features/users/types/types';

import style from './cart.module.css';

function Cart() {
    const { user, handleDeleteCart, handleUpdateCart } = useUser();
    const addProduct = (item: userCart) => {
        const itemUpdated = {
            amount: item.amount + 1,
            isBuy: item.isBuy,
            product: item.product,
        };
        handleUpdateCart(itemUpdated);
    };
    const substractProduct = (item: userCart) => {
        if (item.amount === 1) {
            return;
        }
        const itemUpdated = {
            amount: item.amount - 1,
            isBuy: item.isBuy,
            product: item.product,
        };
        handleUpdateCart(itemUpdated);
    };
    return (
        <>
            <div className={style.divCart}>
                <h1>Cart 🛒 </h1>
                <ul>
                    {user.user?.cart.map((item) => (
                        <li className={style.itemConsole} key={item.product.id}>
                            <div className={style.divArcitulo}>
                                <div>{item.product.name}</div>
                                <button onClick={() => handleDeleteCart(item)}>
                                    ❌
                                </button>
                                <div>
                                    <img
                                        className={style.imagen}
                                        src={item.product.image}
                                        alt={item.product.name}
                                    />
                                </div>
                                <button onClick={() => addProduct(item)}>
                                    +
                                </button>
                                <button onClick={() => substractProduct(item)}>
                                    -
                                </button>
                                <div>{item.amount}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Cart;
