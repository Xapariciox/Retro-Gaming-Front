import { useUser } from '../../../features/users/hook/useUser';

import style from './cart.module.css';

function Cart() {
    const { user, handleDeleteCart, handleUpdateCart } = useUser();
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
                                <button
                                    onClick={() =>
                                        handleUpdateCart({
                                            product: item.product,
                                            amount: item.amount + 1,
                                            isBuy: false,
                                            id: item.product.id as string,
                                        })
                                    }
                                >
                                    +
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
