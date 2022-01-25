import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }; //LA UTILIDAD DEL OR ES QUE SI NO EXISTE EL PRIMER TERMINO, EJECTUE EL 2DO QUE EN ESTE CASO ES EL LOGGED FALSE.
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if (!user) return;

        localStorage.setItem('user', JSON.stringify(user));
    }, [user])


    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
