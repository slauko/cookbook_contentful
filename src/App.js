import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createClient } from 'contentful';
import Footer from './views/Footer';
import Nav from './views/Nav';
import Landing from './views/Landing';
import SearchResults from './views/SearchResults';
import React, { useEffect, useState } from 'react';
import Recipe from './views/Recipe';
import RecipeClass from './classes/RecipeClass';
import Cookies from 'js-cookie';
import Util from './classes/Util';
import './app.css';
// import './color-schemes/blue-1.css';
// import './color-schemes/dark-green.css';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

const colors = ['blue-1', 'dark-green', 'gray-rose', 'green-1', 'red-1'];

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData(client);
    // cookie auslesen und ausgewaehltes Farbschema anwenden
    if (Cookies.get('colors')) Util.changeColor(Cookies.get('colors'));
    // Util.changeColor('red-1');
  }, []);

  function fetchData(client) {
    let results = client
      .getEntries({
        content_type: 'recipe',
      })
      .then(function (entries) {
        populate(entries);
      });
    // console.log(results);
  }

  const populate = (u) => {
    let a = [];

    u.items.forEach((hit) => {
      if (!hit.fields.title) return;
      // console.log(hit);
      const recipe = new RecipeClass(hit);

      a.push(recipe);
    });

    setRecipes(a);

    // console.log(a);
  };

  // console.log(process.env);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href={'./color-schemes/dark-green.css'}
      />
      <Nav />
      <main className="container-fluid p-0 m-0">
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
