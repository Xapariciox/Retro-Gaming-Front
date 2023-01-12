import { useUser } from '../../../features/users/hook/useUser';
import style from './profile.module.css';
function Profile() {
    const { handleDeleteAccount, user } = useUser();

    user.user?.purchasedProducts.forEach((item) => console.log(item, 'item'));

    return (
        <>
            {user.user?.purchasedProducts ? (
                <>
                    <div className={style.containerButton}>
                        <button
                            className={style.button}
                            onClick={() => handleDeleteAccount()}
                        >
                            delete Account
                        </button>
                        <a className={style.link} href="/login">
                            logout
                        </a>
                    </div>
                    <div>
                        <h1>Purchased Products</h1>
                        {user.user?.purchasedProducts[0] ? (
                            <ul>
                                {user.user?.purchasedProducts.map((item) => (
                                    <li>
                                        <p>{item.product.name}</p>
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>empty</p>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <p>loading...</p>
                </>
            )}
        </>
    );
}
export default Profile;
