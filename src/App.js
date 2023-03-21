import './App.css';
import './style/Home.css';
import { AppProvider } from './context/AppContext';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
    
  );
}

export default App;
