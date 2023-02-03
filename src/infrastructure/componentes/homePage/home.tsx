import { Link } from 'react-router-dom';
import style from './home.module.css';

export function HomePage() {
    return (
        <>
            <div
                className={`container-fluid ${style.containerHome} d-flex justify-content-center align-items-center `}
            >
                <div className=" d-flex flex-column justify-content-center align-items-start ms-5 mb-5 p-2 ">
                    <h1
                        className={` ${style.nostalgiaOfretroGame} ${style.nostalgiaOfretroGame1}`}
                    >
                        Nostalgia of
                    </h1>
                    <h1
                        className={` ${style.nostalgiaOfretroGame} ${style.nostalgiaOfretroGame2} `}
                    >
                        retro games
                    </h1>
                    <p
                        className={` ${style.textHome} col-8 
                    `}
                    >
                        Have you ever wanted to play a console again or game you
                        played in your childhood? well here in retro gaming You
                        can get products of the best quality that will make you
                        go back to your childhood days.
                    </p>
                    <Link to="/products">
                        <button className="btn btn-danger   ">See more</button>
                    </Link>
                </div>
                <div className=" ">
                    <img
                        src="../../../assets/Icon-retro.svg"
                        className={`${style.consoleRetro}`}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
