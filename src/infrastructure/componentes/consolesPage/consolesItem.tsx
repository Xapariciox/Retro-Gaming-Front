import { ProductI } from '../../../features/products/types/products';
import { useUser } from '../../../features/users/hook/useUser';

function ConsolesItem({ item }: { item: ProductI }) {
    const { handleAddFavorites, handleDeleteFavorites } = useUser();
    return (
        <>
            <li key={item.id}>
                <div>
                    <div>{item.name}</div>
                </div>
                <button onClick={() => handleAddFavorites(item.id as string)}>
                    ⭐
                </button>
                <button
                    onClick={() => handleDeleteFavorites(item.id as string)}
                >
                    ❌
                </button>
                <div>
                    <img src={item.image} />
                </div>
            </li>
        </>
    );
}
export default ConsolesItem;
