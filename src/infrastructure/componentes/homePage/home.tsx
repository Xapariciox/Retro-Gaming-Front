import { Link } from 'react-router-dom';
import style from './home.module.css';

export function HomePage() {
    return (
        <>
            <div
                className={`container-fluid ${style.containerHome} d-flex flex-column flex-md-row justify-content-center align-items-center `}
            >
                <div className=" d-flex flex-column justify-content-center align-items-center align-items ms-00 ms-md-5 mb-5 p-2 ">
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
                        className={` ${style.textHome} col-10 
                    `}
                    >
                        Have you ever wanted to play any console or video game
                        from when you where a kid? Well, here on Retro gaming
                        you could find products made out of the best quality
                        that will make you go back to your childhood days.
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
