import { useUser } from '../../../features/users/hook/useUser';
import style from './profile.module.css';
function Profile() {
    const { handleDeleteAccount } = useUser();
    return (
        <>
            <div className={style.containerButton}>
                <button
                    className={style.button}
                    onClick={() => handleDeleteAccount()}
                >
                    delete Account
                </button>
                <a className={style.link} href="/login">
                    {' '}
                    logout
                </a>
            </div>
        </>
    );
}
export default Profile;
