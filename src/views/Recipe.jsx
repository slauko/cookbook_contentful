import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './css/recipe.css';
import { createClient } from 'contentful';
import DetailedRecipeClass from '../classes/DetailedRecipeClass';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Recipe({ client }) {
  const { id } = useParams();

  useEffect(() => {
    client.getEntry(id).then(function (entry) {
      console.log(entry);
      setRecipe(new DetailedRecipeClass(entry));
    });
  }, []);

  const [recipe, setRecipe] = useState(); //getRecipeFromID(id);
  return (
    <div className="recipe-div">
      {recipe && (
        <>
          <div>
            {/* Recipe for ID: {id} */}
            <h3>{recipe.title}</h3>
            <div
              style={{
                width: '100%',
                height: '80%',
                backgroundImage: `url(${recipe.picture})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div>
            <h4>Zutaten:</h4>
            <div className="ingrediens">
              {recipe.ingrediens.map((ingredient) => {
                return (
                  <div key={uuidv4()} style={{ minWidth: '150px' }}>
                    {ingredient.amount}
                    {ingredient.unit} {ingredient.description}
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4>Beschreibung:</h4>
            <div dangerouslySetInnerHTML={{__html: recipe.description}}></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                justifyContent: 'flex-end',
                fontStyle: 'normal',
                height: '100%',
              }}
            >
              <ReactStars
                count={5}
                value={recipe.rating}
                size={50}
                isHalf={true}
                edit={false}
              />
              <div style={{ alignSelf: 'center' }}>
                {recipe.rating + ' / 5.0'}
              </div>
            </div>
          </div>
          <div>
            <h4>Zubereitung:</h4>
            <div dangerouslySetInnerHTML={{__html: recipe.preparation}}></div>
          </div>
        </>
      )}
    </div>
  );
}

const testRecipe = {
  title: 'Kuchen',
  picture:
    'https://de.rc-cdn.community.thermomix.com/recipeimage/jtvuiwjs-cf76f-438951-cfcd2-2nm5kkqw/b1db0880-a300-4618-ad14-18be177dfbe8/main/0815-kuchen-gugelhupf-mit-gelinggarantie.jpg',
  description: 'Omas Lieblingskuchen',
  ingrediens: [
    {
      description: 'Mehl',
      amount: '200',
      unit: 'g',
    },
    {
      description: 'Zucker',
      amount: '50',
      unit: 'g',
    },
    {
      description: 'Salz',
      amount: '100',
      unit: 'g',
    },
    {
      description: 'Milch',
      amount: '200',
      unit: 'ml',
    },
  ],
  preparation: 'Alles zusammen mixen und backen.',
  rating: 4.7,
};
