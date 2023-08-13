import { useProduct } from '../../../features/products/hook/useproduct';
import ConsolesItem from './consolesItem';
import style from './consolesSeccion.module.css';
function SeccionConsoles() {
    const { products } = useProduct();
    return (
        <>
            <div
                className={`container-fluid ${style.containerProductsSection}`}
            >
                <ul className={`row pt-3 pb-3  ps-0 ${style.products}`}>
                    {products.map((item) => (
                        <ConsolesItem key={item.id} item={item}></ConsolesItem>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default SeccionConsoles;
