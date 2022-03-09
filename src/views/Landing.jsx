import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import RecipeCarousel from '../components/Carousel';
import './css/landing.css';

const _client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Landing() {
  const [images, setImages] = useState();
  useEffect(() => {
    // _client.getEntry('17WMIvrpXN12XIKI7Q3rPh').then((data) => {
    //   console.log('data', data);
    //   console.log('image-url', data.fields.image[0].fields.file.url);

    //   setImages(data);
    // });

    _client
      .getEntries({
        content_type: 'recipe',
      })
      .then((recipes) => {
        const imgs = recipes.items.map((recipe) => {
          // console.log(recipe.fields.image[0]);
          return {
            title: recipe.fields.title,
            url: recipe.fields.image[0].fields.file.url,
            description: recipe.fields.image[0].fields.description,
          };
        });

        console.log('imgs', imgs);
        setImages(imgs);
      });

    return;
  }, []);

  return (
    <>
      <div className="landing-div">Landing</div>
      <div>
        {/* <img
          src={images?.fields.image[0].fields.file.url}
          width="900px"
          alt="bild"
        /> */}

        <RecipeCarousel
          title="High Rated Recipes"
          description="Some description"
          images={images}
        ></RecipeCarousel>
      </div>
    </>
  );
}
