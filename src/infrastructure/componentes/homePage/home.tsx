import style from './home.module.css';

export function HomePage() {
    return (
        <>
            <div className={`container-fluid ${style.containerHome}`}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">hola</div>
                    <div>hola</div>
                </div>
            </div>
        </>
    );
}
