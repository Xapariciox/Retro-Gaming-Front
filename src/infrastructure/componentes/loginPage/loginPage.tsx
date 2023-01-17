import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../../features/users/hook/useUser';
import style from './loginPage.module.css';

type formData = {
    email: string;
    password: string;
};
function LoginPage() {
    const { handleLogin } = useUser();

    const initialState: formData = {
        email: '',
        password: '',
    };
    const [formState, setFormState] = useState(initialState);
    const handleLoginInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleLoginSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formState);
    };

    return (
        <div className={style.formulario}>
            <form
                onSubmit={handleLoginSubmit}
                className={style.formularioSubmit}
            >
                <p className={style.letrasFormulario}>Login</p>
                <div className={style.formularioValores}>
                    <input
                        className={style.label}
                        type="text"
                        name="email"
                        value={formState.email}
                        onInput={handleLoginInput}
                        placeholder="Email"
                        required={true}
                        minLength={11}
                    />
                    <input
                        className={style.label}
                        type="password"
                        name="password"
                        value={formState.password}
                        onInput={handleLoginInput}
                        placeholder="Contraseña"
                        required={true}
                    />
                </div>

                <button type="submit" className={style.button}>
                    Login
                </button>

                <Link className={style.letrasRedirigir} to="/register">
                    Are you not registered?
                </Link>
            </form>
        </div>
    );
}
export default LoginPage;
