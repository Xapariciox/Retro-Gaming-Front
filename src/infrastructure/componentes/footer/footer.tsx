import style from './footer.module.css';
export const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <p>Developed for Roberto Sandoval</p>
                <p> Contact: </p>
                <a href="https://www.linkedin.com/in/roberto-carlos-sandoval-aparicio/">
                    Linkedin
                </a>
            </footer>
        </>
    );
};
