import style from './footer.module.css';
export const Footer = () => {
    return (
        <>
            <footer
                className={`${style.footer} w-100 d-flex align-items-center justify-content-around `}
            >
                <div className={` ${style.copyright} `}>
                    © 2023 Retro-Gaming. All rights reserved
                </div>
                <div className="">
                    <img
                        src="../../../assets/twitter.png"
                        alt="twitter icon"
                        className="p-1"
                    />
                    <img
                        src="../../../assets/youtube.png"
                        alt="youtube icon"
                        className="p-1"
                    />
                    <img
                        src="../../../assets/ig.png"
                        alt="instagram icon"
                        className="p-1"
                    />
                </div>
            </footer>
        </>
    );
};
