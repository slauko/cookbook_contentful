import React, { useEffect, useState } from 'react';
import RecipeCarousel from '../components/Carousel';
import CookbookService from '../api/recipeService';
import RecipeCards from '../components/Cards';
import './css/landing.css';

export default function Landing() {
  const [images, setImages] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [recipes2, setRecipes2] = useState(null);

  useEffect(() => {
    CookbookService.searchRecipes('%').then((recipes) => {
      let random = Math.floor(Math.random() * 95);
      setRecipes(recipes.slice(random, random + 5));

      random = Math.floor(Math.random() * 95);
      setRecipes2(recipes.slice(random, random + 5));

      random = Math.floor(Math.random() * 90);
      const imgs = recipes.slice(random, random + 10).map((recipe) => {
        // console.log('recipe', recipe);
        return {
          id: recipe.id,
          title: recipe.title,
          url: recipe.url,
          description: recipe.description,
        };
      });

      // console.log('imgs', imgs);
      setImages(imgs);
    });

    return;
  }, []);

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
