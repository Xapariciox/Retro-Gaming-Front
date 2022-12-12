import { useProduct } from '../../../features/products/hook/useproduct';
import ConsolesItem from './consolesItem';

function SeccionConsoles() {
    const { products } = useProduct();

    return (
        <>
            <ul>
                {products.map((item) => (
                    <ConsolesItem key={item.id} item={item}></ConsolesItem>
                ))}
            </ul>
        </>
    );
}
export default SeccionConsoles;
