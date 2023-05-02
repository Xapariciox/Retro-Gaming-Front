import { useEffect, useState } from 'react';
import { useUser } from '../../../features/users/hook/useUser';
import style from './favorites.module.css';

function Favorites() {
    const { handleDeleteFavorites } = useUser();
    const { user } = useUser();
    const [favorites, setFavorites] = useState(user.user?.favorites[0])


    return (
        <>
        {console.log(favorites)}
        {favorites ?<div
                className={`container-fluid ${style.containerProductsSection}`}
            >
                <ul className="row  ps-0 d-flex align-items-center justify-content-center">
                    {user.user?.favorites.map((item) => (
                        <li
                            key={item.id}
                            className={`card col-10 col-md-2 m-2 m-md-5 ${style.cardProductFavorites}`}
                        >
                            {' '}
                            <div className="d-flex align-items-center justify-content-end">
                                <a
                                    onClick={() => handleDeleteFavorites(item)}
                                    className={`border-0 p-0  ${style.linkFavoritesAndCart}`}
                                >
                                    <img
                                        src="../../../assets/buttonDeleteFavorites.png"
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
                            </div>
                        </li>
                    ))}
                </ul>
            </div>  :<h4 className={style.noFavorites}>No tienes favoritos</h4>}
            
        </>
    );
}
export default Favorites;
