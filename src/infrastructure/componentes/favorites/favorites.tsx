import { useUser } from '../../../features/users/hook/useUser';

function Favorites() {
    const { user } = useUser();
    return (
        <>
            {/* <p>{user.user?.favorites}</p> */}
            <ul>
                {user.user?.favorites.map((item) => (
                    <li key={item.id}>
                        <div>
                            <div>{item.name}</div>
                            <div>
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Favorites;
