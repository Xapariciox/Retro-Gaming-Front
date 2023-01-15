import { useProduct } from '../../../features/products/hook/useproduct';
import ConsolesItem from './consolesItem';
import style from './consolesSeccion.module.css';
function SeccionConsoles() {
    const { products } = useProduct();
    return (
        <>
            <ul className={style.ListConsoles}>
                <div className={style.containerConsoles}>
                    {products.map((item) => (
                        <ConsolesItem key={item.id} item={item}></ConsolesItem>
                    ))}
                </div>
            </ul>
        </>
    );
}
export default SeccionConsoles;
