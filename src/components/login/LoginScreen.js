import "./LoginScreen.css"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Agustin' }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="text-center backgroundImage">

            <div className="container alert alert-secondary alertPosition" role="alert">
                <h1>SuperHero App</h1>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>

        </div>
    )
}
