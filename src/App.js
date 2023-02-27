import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Index } from './view/user/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App;
