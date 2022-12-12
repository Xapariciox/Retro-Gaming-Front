import { useProduct } from '../../../features/products/hook/useproduct';
import ConsolesItem from './consolesItem';
import style from './consolesSeccion.module.css';
function SeccionConsoles() {
    const { products } = useProduct();
    return (
        <>
            <ul className={style.ListConsoles}>
                {products.map((item) => (
                    <ConsolesItem key={item.id} item={item}></ConsolesItem>
                ))}
            </ul>
        </>
    );
}
export default SeccionConsoles;
