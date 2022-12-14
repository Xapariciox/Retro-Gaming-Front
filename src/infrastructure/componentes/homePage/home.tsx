import style from './home.module.css';

export function HomePage() {
    return (
        <>
            <div className={style.container}>
                <h1 className={style.h1}>
                    Adquiere las mejores consolas retro en Perfecto estado y
                    videojuegos de la mejor calidad
                </h1>
                <div className={style.containerImages}>
                    <img
                        className={style.image}
                        src="./assets/imagenHome2.png"
                        alt=""
                    />
                    <img
                        className={style.image}
                        src="./assets/imagenHome.png"
                        alt=""
                    />
                    <img
                        className={style.image}
                        src="./assets/imagenHome2.png"
                        alt=""
                    />
                </div>

                <p className={style.p}>
                    Enterate de nuestro Stock ahora mismo!
                </p>
            </div>
        </>
    );
}
