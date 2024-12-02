import AdminDashboard from './pages/AdminDashboard';
import './styles/App.css';
import {Route,Routes,BrowserRouter} from'react-router-dom'
import "./styles/base/color.css";
import "./styles/base/base.css";
import "./styles/base/flex.css";
import "./styles/pages/dashboard.css";
import {Provider} from "react-redux"
import UserProvider from './context/usersContext';
import { store } from './redux/store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Provider store = {store} >

      <UserProvider>

        <Routes>

          <Route path='/test' element={<AdminDashboard/>}/>
        </Routes>

        </UserProvider>
        </Provider>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
