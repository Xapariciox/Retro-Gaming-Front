import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../features/users/hook/useUser';

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
        <div className="formulario">
            <form onSubmit={handleLoginSubmit} className="formulario-submit">
                <p>Formulario Login</p>
                <input
                    className={'email'}
                    type="text"
                    name="email"
                    value={formState.email}
                    onInput={handleLoginInput}
                    placeholder="Email"
                    required={true}
                    minLength={11}
                />
                <input
                    className={'password'}
                    type="password"
                    name="password"
                    value={formState.password}
                    onInput={handleLoginInput}
                    placeholder="Contraseña"
                    required={true}
                />
                <button type="submit" className={'prueba'}>
                    Login
                </button>
                {/* <a href="/register">
                    aun no estas registrado? */}
                <Link to="/register">Are you not registered? register now</Link>
                {/* </a> */}
            </form>
        </div>
    );
}
export default LoginPage;
