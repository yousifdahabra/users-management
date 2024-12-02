import AdminDashboard from './pages/AdminDashboard';
import './styles/App.css';
import {Route,Routes,BrowserRouter} from'react-router-dom'
import "./styles/base/color.css";
import "./styles/base/base.css";
import "./styles/base/flex.css";
import "./styles/pages/dashboard.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/test' element={<AdminDashboard/>}/>
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
