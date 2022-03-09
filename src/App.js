import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { createClient } from 'contentful';
import Footer from './views/Footer';
import Nav from './views/Nav';
import Landing from './views/Landing';
import SearchResults from './views/SearchResults';
import React, { useEffect } from 'react';
import Recipe from './views/Recipe';
import RecipeClass from './classes/RecipeClass';
import './app.css';

const client = createClient({
  space: "h5pc0o4cj51n",
  accessToken: "oijppwp2beVledF05dFDxlayGoNexONvWIqiizuINnw",
});

function App() {
  useEffect(() => {
    fetchData(client);
  }, []);

  function fetchData(client) {
    let results = client.getEntries({
      content_type: "recipe",
    }).then(function (entries) {
      populate(entries);
    });
    console.log(results);
  }

  const populate = (u) => {
    let a = [];

    u.items.forEach((hit) => {
      if (!hit.fields.title) return;

      const article = new RecipeClass(hit.fields);

      a.push(article);
    });

    console.log(a)
  };

  console.log(process.env);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
