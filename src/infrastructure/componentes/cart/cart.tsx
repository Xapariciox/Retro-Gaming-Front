import { useUser } from '../../../features/users/hook/useUser';

import style from './cart.module.css';

function Cart() {
    const { user } = useUser();
    return (
        <>
            <ul>
                {user.user?.cart.map((item) => (
                    <li className={style.itemConsole} key={item.product.id}>
                        <div className={style.divArcitulo}>
                            <div>{item.product.name}</div>
                            <div>
                                <img
                                    className={style.imagen}
                                    src={item.product.image}
                                    alt={item.product.name}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Cart;
