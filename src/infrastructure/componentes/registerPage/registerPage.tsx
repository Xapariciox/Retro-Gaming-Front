import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceUsers } from '../../../features/users/service/service-user';
type formData = {
    name: string;
    email: string;
    imageProfile: string;
    password: string;
};
function RegisterPage() {
    const userRepo = new ServiceUsers();
    const initialState: formData = {
        name: '',
        email: '',
        imageProfile: '',
        password: '',
    };
    const [formState, setFormState] = useState(initialState);
    const handleRegisterInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleRegisterSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        userRepo.register(formState);
    };
    return (
        <div className="formulario">
            <form onSubmit={handleRegisterSubmit} className="formulario-submit">
                <p>Formulario Register</p>
                <input
                    className={'nombre'}
                    type="text"
                    name="name"
                    value={formState.name}
                    onInput={handleRegisterInput}
                    placeholder="name"
                    required={true}
                    minLength={2}
                />
                <input
                    className={'email'}
                    type="text"
                    name="email"
                    value={formState.email}
                    onInput={handleRegisterInput}
                    placeholder="email"
                    required={true}
                    minLength={2}
                />
                <input
                    className={'password'}
                    type="password"
                    name="password"
                    value={formState.password}
                    onInput={handleRegisterInput}
                    placeholder="password"
                    required={true}
                />
                <input
                    className={'imagen'}
                    type="text"
                    name="imageProfile"
                    value={formState.imageProfile}
                    onInput={handleRegisterInput}
                    placeholder="Image"
                />

                <button type="submit" className={'prueba'}>
                    Register
                </button>

                <Link to="/login">Are you registered? login now</Link>
            </form>
        </div>
    );
}
export default RegisterPage;
