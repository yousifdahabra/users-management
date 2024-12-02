import AdminDashboard from './pages/AdminDashboard';
import './styles/App.css';
import {Route,Routes,BrowserRouter} from'react-router-dom'
import "./styles/base/color.css";
import "./styles/base/base.css";
import "./styles/base/flex.css";
import "./styles/pages/dashboard.css";

import UserProvider from './context/usersContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <UserProvider>

        <Routes>

          <Route path='/test' element={<AdminDashboard/>}/>
        </Routes>

        </UserProvider>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
