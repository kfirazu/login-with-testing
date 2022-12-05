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
            <h2 className='greet-user'>Welcome {user.name}</h2>
            <img className='user-img' src={user.imgUrl} alt="user-image" />
            <button className='btn-back' onClick={onGoBack}>Back</button>
            

        </section>
    )
}