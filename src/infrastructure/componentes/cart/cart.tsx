import { useUser } from '../../../features/users/hook/useUser';
import style from './cart.module.css';

function Cart() {
    const { user } = useUser();
    return (
        <>
            <ul>
                {user.user?.cart.map((item) => (
                    <li className={style.itemConsole} key={item.id.id}>
                        <div className={style.divArcitulo}>
                            <div>{item.id.name}</div>
                            <div>
                                <img
                                    className={style.imagen}
                                    src={item.id.image}
                                    alt={item.id.name}
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
