import './styles/App.css';
import {Router,Routes,BrowserRouter} from'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Router path='/' elemment={<></>}/>
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
