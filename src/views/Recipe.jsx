import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import './css/recipe.css';
import { createClient } from 'contentful';
import DetailedRecipeClass from '../classes/DetailedRecipeClass';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Recipe() {
  const { id } = useParams();

  useEffect(() => {
    client.getEntry(id).then(function (entry) {
      console.log(entry)
      setRecipe(new DetailedRecipeClass(entry));
    });
  }, []);

  const [recipe, setRecipe] = useState({
    title: "Kuchen",
    picture: "https://de.rc-cdn.community.thermomix.com/recipeimage/jtvuiwjs-cf76f-438951-cfcd2-2nm5kkqw/b1db0880-a300-4618-ad14-18be177dfbe8/main/0815-kuchen-gugelhupf-mit-gelinggarantie.jpg",
    description: "Omas Lieblingskuchen",
    ingrediens: [
      {
        description: "Mehl",
        amount: "200",
        unit: "g",
      },
      {
        description: "Zucker",
        amount: "50",
        unit: "g",
      },
      {
        description: "Salz",
        amount: "100",
        unit: "g",
      },
      {
        description: "Milch",
        amount: "200",
        unit: "ml",
      },
    ],
    preparation: "Alles zusammen mixen und backen.", 
    rating: 4.7
  });
  

  /*const recipe = {
    title: "Kuchen",
    picture: "https://de.rc-cdn.community.thermomix.com/recipeimage/jtvuiwjs-cf76f-438951-cfcd2-2nm5kkqw/b1db0880-a300-4618-ad14-18be177dfbe8/main/0815-kuchen-gugelhupf-mit-gelinggarantie.jpg",
    description: "Omas Lieblingskuchen",
    ingrediens: [
      {
        description: "Mehl",
        amount: "200",
        unit: "g",
      },
      {
        description: "Zucker",
        amount: "50",
        unit: "g",
      },
      {
        description: "Salz",
        amount: "100",
        unit: "g",
      },
      {
        description: "Milch",
        amount: "200",
        unit: "ml",
      },
    ],
    preparation: "Alles zusammen mixen und backen.", 
    rating: 4.7
  };//getRecipeFromID(id);*/
  return(
    <div className="recipe-div">
      <div className="recipe-left">
        Recipe for ID: {id}
        <h3>{recipe.title}</h3>
        <img className="recipe-image" src={recipe.picture} alt="Img" />
        <h4>{recipe.description}</h4>
        <Rating initialRating={recipe.rating} fractions={2} readonly={false} />
      </div>
      <div className="recipe-right">
        <h4>Zutaten:</h4>
        {recipe.ingrediens.map(ingredient => {
          return <div key = {uuidv4()}>
            <p>{ingredient.amount}{ingredient.unit} {ingredient.description}</p>
          </div>
        })}
        <h4>Zubereitung:</h4>
        {recipe.preparation} 
      </div>
    </div>
    );
}
