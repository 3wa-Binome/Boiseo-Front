import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderTemplate from './components/templates/HeaderTemplate';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import Products from './components/pages/Products';
import Materials from './components/pages/Materials';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Logout from './components/pages/Logout';
import PrivateRoute from "./components/organisms/PrivateRoute";
import './styles/main.scss';
import './styles/pages/dashboard.scss';
import './styles/pages/products.scss';
import './styles/pages/materials.scss';
import './styles/pages/auth.scss';
import './styles/pages/formulaireAjout.scss';
import './styles/organisms/navigations.scss';
import './styles/organisms/navBar.scss';
import { authStore } from "./store/authStore.js";
import { useEffect } from "react";
import FormulaireAjout from "./components/pages/FormulaireAjout.jsx";

const App = () => {
    const checkAuth = authStore(state => state.checkAuth);

    useEffect(  () => {
         checkAuth();
    }, [checkAuth]);

    return (
        <Router basename="/">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/ajouter/product/:type/:categoryId"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <FormulaireAjout />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/ajouter/:type/:categoryId?"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <FormulaireAjout />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/products/:id"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <Products />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/materials/:id"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <Materials />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <HeaderTemplate />
                            <Profile />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;