import { useProduct } from '../../../features/products/hook/useproduct';
import { useUser } from '../../../features/users/hook/useUser';

function SeccionConsoles() {
    const { products } = useProduct();
    const { handleAddFavorites } = useUser();

    return (
        <>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <div>
                            <div>{item.name}</div>
                        </div>
                        <button
                            onClick={() =>
                                handleAddFavorites(item.id as string)
                            }
                        >
                            ⭐
                        </button>
                        <div>
                            <img src={item.image} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default SeccionConsoles;
