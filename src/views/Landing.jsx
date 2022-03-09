import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import RecipeCarousel from '../components/Carousel';
import './css/landing.css';

const _client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Landing() {
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    _client.getEntry('17WMIvrpXN12XIKI7Q3rPh').then((data) => {
      console.log('data', data);
      console.log('image-url', data.fields.image[0].fields.file.url);

      setRecipe(data);
    });
    return;
  }, []);

  return (
    <>
      <div className="landing-div">Landing</div>
      <div>
        <img
          src={recipe?.fields.image[0].fields.file.url}
          width="900px"
          alt="bild"
        />

        <RecipeCarousel></RecipeCarousel>
      </div>
    </>
  );
}
