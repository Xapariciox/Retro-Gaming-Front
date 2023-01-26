import style from './footer.module.css';
export const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <p>All rights reserved</p>
                <div className={style.div}>
                    <a
                        className={style.link}
                        target="_blank"
                        href="https://www.linkedin.com/in/roberto-carlos-sandoval-aparicio/"
                    >
                        Contact
                    </a>
                </div>
            </footer>
        </>
    );
};
