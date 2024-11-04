import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Cuisines from './pages/Cuisines';
// import Recipes from './pages/Recipes';
// import RecipeDetails from './pages/RecipeDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
