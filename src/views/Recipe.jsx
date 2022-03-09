import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/recipe.css';
import { createClient } from 'contentful';

const _client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});
export default function Recipe({ client }) {
  const [recipe, setRecipe] = useState();

  const { id } = useParams();

  useEffect(() => {
    _client.getEntry('17WMIvrpXN12XIKI7Q3rPh').then((data) => {
      console.log('data', data);
      console.log('image-url', data.fields.image[0].fields.file.url);

      setRecipe(data);
    });
    return;
  });
  return (
    <>
      <div className="recipe-div">Recipe for ID: {id}</div>
      <div>
        <img
          src={recipe.fields.image[0].fields.file.url}
          width="900px"
          alt="bild"
        />
      </div>
    </>
  );
}
