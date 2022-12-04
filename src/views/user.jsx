import { useSelector } from 'react-redux';
export const User = () => {

    const user = useSelector(state => state.userModule.user)
    return (
        <section className="user">
            <h2>Welcome {user.name}</h2>
            <img src={user.imgUrl} alt="user-image" />

        </section>
    )
}