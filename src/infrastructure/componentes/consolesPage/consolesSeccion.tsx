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
                <ul className="row  ps-0 d-flex align-items-center justify-content-center">
                    {products.map((item) => (
                        <ConsolesItem key={item.id} item={item}></ConsolesItem>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default SeccionConsoles;
