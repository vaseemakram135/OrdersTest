import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './LoginForm';
import OrdersPage from './Orders';
function App() {
  return (
    <div className="App">
   <>
      <Routes>
        <Route path='/' element={< LoginPage />} />
        <Route path='/test' element={< OrdersPage />} />
    </Routes>
</>
    </div>
  );
}

export default App;
