import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import RecipeCarousel from '../components/Carousel';
import './css/landing.css';
import CMApi from '../importData';
import RecipeCards from '../components/Cards';

const _client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Landing() {
  const [images, setImages] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [recipes2, setRecipes2] = useState(null);

  useEffect(() => {
    _client
      .getEntries({
        content_type: 'recipe',
      })
      .then((recipes) => {
        let random = Math.floor(Math.random() * 95);
        setRecipes(recipes.items.slice(random, random + 5));

        random = Math.floor(Math.random() * 95);
        setRecipes2(recipes.items.slice(random, random + 5));

        random = Math.floor(Math.random() * 90);
        const imgs = recipes.items.slice(random, random + 10).map((recipe) => {
          return {
            id: recipe.sys.id,
            title: recipe.fields.title,
            url: recipe.fields.imageUrl,
            // description: recipe.fields.description,
          };
        });

        console.log('imgs', imgs);
        setImages(imgs);
      });

    return;
  }, []);

  function testCMapi() {
    const cmapi = new CMApi();

    cmapi.getAssets();
  }

  return (
    <>
      {/* <div className="landing-div">Landing</div> */}
      <div>
        {/* <img
          src={images?.fields.image[0].fields.file.url}
          width="900px"
          alt="bild"
        /> */}

        {/* <button onClick={testCMapi}>Test CMApi</button> */}

        <RecipeCarousel
          title="Welcome to Cookbook"
          description="Cookbook CMS by Group Four"
          images={images}
          display="display-2"
        ></RecipeCarousel>
      </div>

      {recipes && (
        <div className="pt-4">
          <RecipeCards
            title="Favourites of the Week"
            description="Check out trending recipes!"
            recipes={recipes}
          />
        </div>
      )}

      {recipes2 && (
        <div className="py-2 color-light-middle">
          <RecipeCards
            title="Vegetarian Trends"
            description="Healthy Recipes with great taste"
            recipes={recipes2}
          />
        </div>
      )}
    </>
  );
}
