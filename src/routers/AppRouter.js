import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen /> 
                    </PublicRoute> // LOGINSCREEN SE COMPARTA COMO UN CHILDREN (PROPS)
                } 
                />
                

                <Route path="/*" element={ 
                        <PrivateRoute>
                            <DashboardRoutes /> 
                        </PrivateRoute> // DASHBOARDROUTES SE COMPARTA COMO UN CHILDREN (PROPS)
                    } 
                />

                {/* <Route path="/*" element={ <DashboardRoutes />  } /> */}

            </Routes>
        </BrowserRouter>
    )
}
