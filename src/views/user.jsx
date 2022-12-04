import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const User = () => {

    const user = useSelector(state => state.userModule.user)
    const navigate = useNavigate()

    const onGoBack = () => {
        navigate(-1)
    }
    return (
        <section className="user">
            <h2>Welcome {user.name}</h2>
            <img src={user.imgUrl} alt="user-image" />
            <button onClick={onGoBack}>Back</button>
            

        </section>
    )
}