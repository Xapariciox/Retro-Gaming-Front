import Swal from 'sweetalert2';
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
    const amountCart = () => {
        let amount = 0;
        user.user?.cart.forEach((item) => (amount += item.amount));
        return amount;
    };
    const buyCart = () => {
        Swal.fire(
            `Congratulations! `,
            `You have just successfully purchased ${amountCart()} items `,
            'success'
        );
        handleBuyCart(user.user?.cart as unknown as userCart);
    };
    return (
        <>
            <div className={style.divCart}>
                <h1>Cart 🛒 </h1>
                <ul className={style.ulDiv}>
                    {user.user?.cart.map((item) => (
                        <li className={style.itemConsole} key={item.product.id}>
                            <div>
                                <p className='text-center'>{item.product.name}</p>

                                <img
                                    className={style.imagen}
                                    src={item.product.image}
                                    alt={item.product.name}
                                />
                            </div>
                            <button
                                className={`${style.button} btn btn-secundary`}
                                onClick={() => handleDeleteCart(item)}
                            >
                                ❌
                            </button>
                            <p className={style.amount}>Amount: {item.amount}</p>
                            <div  className={style.amount}>
                                <button
                                    className={`${style.button} btn btn-primary`}
                                    onClick={() => substractProduct(item)}
                                >
                                    -
                                </button>
                                <button
                                    className={`${style.button} btn btn-primary`}
                                    onClick={() => addProduct(item)}
                                >
                                    +
                                </button>
                            </div>
                            <p>{item.product.price * item.amount}€</p>

                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.total}>
                <p className={style.totalIn}>Total</p>
                <p>{priceCart()} €</p>
                <button className={style.buy} onClick={() => buyCart()}>
                    Buy
                </button>
            </div>
        </>
    );
}
export default Cart;
