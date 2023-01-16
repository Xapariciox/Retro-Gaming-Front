import Swal from 'sweetalert2';
import { useUser } from '../../../features/users/hook/useUser';
import style from './profile.module.css';
function Profile() {
    const { handleDeleteAccount, user, handleSDeletePurchasedProducts } =
        useUser();
    const onClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                handleSDeletePurchasedProducts();
            }
        });
    };
    const onClick2 = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                handleDeleteAccount();
            }
        });
    };
    return (
        <>
            {user.user?.purchasedProducts[0] ? (
                <>
                    <div className={style.containerTotal}>
                        <h1>Account management</h1>
                        <div className={style.containerButton}>
                            <a className={style.link} href="/login">
                                logout
                            </a>
                            <button
                                className={style.button}
                                onClick={() => onClick2()}
                            >
                                Delete Account
                            </button>
                        </div>
                        <div className={style.deletePurchasedProduct}>
                            <h1>Purchased Products</h1>
                            <button onClick={() => onClick()}>❌</button>
                        </div>
                        <div className={style.containerPurchased}>
                            <ul className={style.purchasedProducts}>
                                {user.user?.purchasedProducts.map((item) => (
                                    <li
                                        key={item.product.id}
                                        className={style.itemConsole}
                                    >
                                        <p>{item.product.name}</p>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                        />
                                        <p>
                                            Productos adquiridos:
                                            {item.amount}
                                        </p>
                                        <p>
                                            total:{' '}
                                            {item.amount * item.product.price}€
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <>
                        <div className={style.containerTotal}>
                            <h1>Account management</h1>
                            <div className={style.containerButton}>
                                <a className={style.link} href="/login">
                                    logout
                                </a>
                                <button
                                    className={style.button}
                                    onClick={() => handleDeleteAccount()}
                                >
                                    delete Account
                                </button>
                            </div>

                            <h1>Purchased Products</h1>

                            <div className={style.containerPurchased}>
                                <div className={style.emptyContent}>
                                    <p className={style.empty}>Empty...</p>
                                </div>
                            </div>
                        </div>
                    </>
                </>
            )}
        </>
    );
}
export default Profile;
