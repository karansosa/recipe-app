import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cuisines from './pages/Cuisines';
import RecipeDetails from './pages/RecipeDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:cuisineType" element={<Cuisines />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
