import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUser } from '../../../features/users/hook/useUser';
import { v4 } from 'uuid';

import {
    getUrl,
    uploadFile,
} from '../../../features/users/service/config.ts/storage';

import style from './profile.module.css';

function Profile() {
    const navigate = useNavigate();
    const {
        handleDeleteAccount,
        user,
        handleSDeletePurchasedProducts,
        handleLogoutFinish,
        handleChangeProfileImg,
    } = useUser();
    const [file, setfile] = useState({});

    const handleSubmit = async (e: SyntheticEvent) => {
        const idImage = v4();
        e.preventDefault();
        await uploadFile(file, user.user?.name as unknown as string, idImage);
        const url = await getUrl(
            user.user?.name as unknown as string,
            idImage
        ).then((item) => item?.publicUrl);

        handleChangeProfileImg({
            imageProfile: url,
        });
    };
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
                Swal.fire(
                    'Deleted!',
                    'your account has been successfully deleted.',
                    'success'
                );
                navigate('/register');
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
                            <Link
                                onClick={() => handleLogoutFinish()}
                                to={'login'}
                            >
                                <button className={style.link}>logout</button>
                            </Link>
                            <button
                                className={style.button}
                                onClick={() => onClick2()}
                            >
                                Delete Account
                            </button>
                            <form onSubmit={handleSubmit}>
                                <input
                                    accept="image/*"
                                    type="file"
                                    name=""
                                    id=""
                                    onChange={(file) => setfile(file)}
                                />
                                <button>upload</button>
                            </form>
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
                                            className={style.imagen}
                                            src={item.product.image}
                                            alt={item.product.name}
                                        />
                                        <p>
                                            Productos adquiridos:
                                            {item.amount}
                                        </p>
                                        <p>
                                            total:
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
                                <Link
                                    onClick={() => handleLogoutFinish()}
                                    to={'login'}
                                >
                                    <button className={style.link}>
                                        logout
                                    </button>
                                </Link>
                                <button
                                    className={style.button}
                                    onClick={() => onClick2()}
                                >
                                    Delete Account
                                </button>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        name=""
                                        id=""
                                        onChange={(file) => setfile(file)}
                                    />
                                    <button>upload</button>
                                </form>
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
