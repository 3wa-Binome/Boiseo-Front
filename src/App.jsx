import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderTemplate from './components/templates/HeaderTemplate';
import Dashboard from './components/pages/Dashboard.jsx';
import Etageres from "./components/pages/Etageres.jsx";
import Armoires from "./components/pages/Armoires.jsx";
import Materials from "./components/pages/Materials.jsx";
import './styles/main.scss';
import './styles/pages/dashboard.scss';
import './styles/pages/products.scss';
import './styles/pages/materials.scss';
import './styles/organisms/navigations.scss';
import './styles/organisms/navBar.scss';


const App = () => {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<><HeaderTemplate /><Dashboard /></>} />
                <Route path="/shelf" element={<><HeaderTemplate /><Etageres /></>} />
                <Route path="/cabinet" element={<><HeaderTemplate /><Armoires /></>} />
                <Route path="/:materialName" element={<><HeaderTemplate /><Materials /></>} />
            </Routes>
        </Router>
    );
};

export default App;