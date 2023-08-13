import { SyntheticEvent } from 'react';
import Swal from 'sweetalert2';
import { ProductI } from '../../../features/products/types/products';
import { useUser } from '../../../features/users/hook/useUser';
import style from './consolesItem.module.css';
function ConsolesItem({ item }: { item: ProductI }) {
    const { handleAddFavorites, handleAddCart, user } = useUser();
    const handleClick = (ev: SyntheticEvent) => {
        if (user.user?.favorites.find((product) => product.id === item.id)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `you have already added ${item.name} to your favorites`,
            });
            return;
        }
        ev.preventDefault();
        handleAddFavorites(item);
        Swal.fire(
            `Congratulations! `,
            `you have just successfully added ${item.name}`,
            'success'
        );
    };
    const handleClickLogout = () => {
        Swal.fire(
            `Please login `,
            `To perform this option, please login`,
            'error'
        );
    };
    const handleClickCart = (ev: SyntheticEvent) => {
        if (user.user?.cart.find((product) => product.product.id === item.id)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `you have already added ${item.name} to your Cart`,
            });
            return;
        }
        Swal.fire(
            `Succes `,
            `you have just successfully added "${item.name}" to your cart`,
            'success'
        );
        ev.preventDefault();
        handleAddCart({
            isBuy: true,
            product: item,
            amount: 1,
        });
    };

    return (
        <>
            {user.user ? (
                <li
                    key={item.id}
                    className={`card  ${style.cardProduct}`}
                >
                    <div className="d-flex align-items-center justify-content-end">
                        <a
                            className={`border-0 p-0  ${style.linkFavoritesAndCart}`}
                            onClick={handleClick}
                        >
                            <img
                                onClick={() => handleClick}
                                src="../../../assets/buttonFavorites.png"
                                alt="Product"
                                width={25}
                                height={25}
                                className={` mt-3  `}
                            />
                        </a>
                    </div>
                    <img
                        src={item.image}
                        alt="Product"
                        className={` mt-2 card-img-top ${style.imgProducts}`}
                    />
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">
                            stock: {item.stock}
                        </h6>
                        <h5
                            className={`card-title mb-2 ${style.nameCardproduct}`}
                        >
                            {item.name}
                        </h5>
                        <div className="d-flex mt-4 align-items-center justify-content-between">
                            <p className={`card-text ${style.priceProduct} `}>
                                {' '}
                                {item.price} €
                            </p>
                            <a
                                className={`p-0 m-0 ${style.linkFavoritesAndCart}`}
                                onClick={handleClickCart}
                            >
                                <img
                                    width={25}
                                    src="../../../assets/cartCard.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </li>
            ) : (
                <li
                    key={item.id}
                    className={`card ${style.cardProduct}`}
                >
                    <div className="d-flex align-items-center justify-content-end">
                        <a
                            className={`border-0 p-0  ${style.linkFavoritesAndCart}`}
                            onClick={handleClickLogout}
                        >
                            <img
                                onClick={() => handleClick}
                                src="../../../assets/buttonFavorites.png"
                                alt="Product"
                                width={25}
                                height={25}
                                className={` mt-3  `}
                            />
                        </a>
                    </div>
                    <img
                        src={item.image}
                        alt="Product"
                        className={` mt-2 card-img-top ${style.imgProducts}`}
                    />
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">
                            stock: {item.stock}
                        </h6>
                        <h5
                            className={`card-title mb-2 ${style.nameCardproduct}`}
                        >
                            {item.name}
                        </h5>
                        <div className="d-flex mt-4 align-items-center justify-content-between">
                            <p className={`card-text ${style.priceProduct} `}>
                                {' '}
                                {item.price} €
                            </p>
                            <a
                                className={`p-0 m-0 ${style.linkFavoritesAndCart}`}
                                onClick={handleClickLogout}
                            >
                                <img
                                    width={25}
                                    src="../../../assets/cartCard.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </li>
            )}
        </>
    );
}
export default ConsolesItem;
