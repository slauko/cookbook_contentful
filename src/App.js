import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createClient } from 'contentful';
import Footer from './views/Footer';
import Nav from './views/Nav';
import Landing from './views/Landing';
import Results from './views/Results';
import Recipe from './views/Recipe';
import './app.css';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<Results />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
