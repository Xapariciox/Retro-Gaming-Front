import { useUser } from '../../../features/users/hook/useUser';
import { userCart } from '../../../features/users/types/types';

import style from './cart.module.css';

function Cart() {
    const { user, handleDeleteCart, handleUpdateCart, handleBuyCart } =
        useUser();
    const priceCart = () => {
        let price = 0;
        user.user?.cart.forEach(
            (item) => (price += item.product.price * item.amount)
        );
        return price;
    };
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
                <ul className={style.ulDiv}>
                    {user.user?.cart.map((item) => (
                        <li className={style.itemConsole} key={item.product.id}>
                            <div>
                                <p>{item.product.name}</p>

                                <img
                                    className={style.imagen}
                                    src={item.product.image}
                                    alt={item.product.name}
                                />
                            </div>
                            <p className={style.amount}>Amount {item.amount}</p>
                            <div className={style.amount}>
                                <button
                                    className={style.button}
                                    onClick={() => substractProduct(item)}
                                >
                                    -
                                </button>
                                <button
                                    className={style.button}
                                    onClick={() => addProduct(item)}
                                >
                                    +
                                </button>
                            </div>
                            <p>{item.product.price}€</p>
                            <button
                                className={style.button}
                                onClick={() => handleDeleteCart(item)}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.total}>
                <p className={style.totalIn}>Total</p>
                <p>{priceCart()} €</p>
                <button
                    className={style.buy}
                    onClick={() =>
                        handleBuyCart(user.user?.cart as unknown as userCart)
                    }
                >
                    Buy
                </button>
            </div>
        </>
    );
}
export default Cart;
