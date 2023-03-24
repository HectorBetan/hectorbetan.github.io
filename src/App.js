import './App.css';

import { AppProvider } from './context/AppContext';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <AppProvider>
      <div className="App">
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
      </div>
    </AppProvider>
    
  );
}

export default App;
