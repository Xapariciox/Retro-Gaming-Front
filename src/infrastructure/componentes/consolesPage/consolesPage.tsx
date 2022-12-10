import { useProduct } from '../../../features/products/hook/useproduct';

function SeccionConsoles() {
    const { products } = useProduct();
    // const { handleAddFavorites } = useUser();
    // const handleClick = () => {
    //     products.map((item) => {
    //         handleAddFavorites(item as any);
    //     });
    // };
    return (
        <>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <div>
                            <div>{item.name}</div>
                        </div>
                        <button>⭐</button>
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
