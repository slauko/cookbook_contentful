import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createClient } from 'contentful';
import Footer from './views/Footer';
import Nav from './views/Nav';
import Landing from './views/Landing';
import SearchResults from './views/SearchResults';
import React, { useEffect, useState } from 'react';
import Recipe from './views/Recipe';
import RecipeClass from './classes/RecipeClass';
import './app.css';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData(client);
  }, []);

  function fetchData(client) {
    let results = client
      .getEntries({
        content_type: 'recipe',
      })
      .then(function (entries) {
        populate(entries);
      });
    console.log(results);
  }

  const populate = (u) => {
    let a = [];

    u.items.forEach((hit) => {
      if (!hit.fields.title) return;

      const recipe = new RecipeClass(hit.fields);

      a.push(recipe);
    });

    setRecipes(a);

    console.log(a);
  };

  console.log(process.env);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/recipe/:id" element={<Recipe client={client} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
