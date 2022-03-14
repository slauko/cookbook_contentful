import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './css/recipe.css';
import { createClient } from 'contentful';
import DetailedRecipeClass from '../classes/DetailedRecipeClass';

import useBreakpoints from '../custom/useBreakpoint';

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,
});

export default function Recipe({ client }) {
  const { id } = useParams();

  const point = useBreakpoints();

  useEffect(() => {
    client.getEntry(id).then(function (entry) {
      console.log(entry);
      setRecipe(new DetailedRecipeClass(entry));
    });
  }, []);

  const [recipe, setRecipe] = useState(null); //getRecipeFromID(id);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    if (recipe) {
      setRating(recipe?.rating);
    }
  }, [recipe]);

  useEffect(() => {
    if (!rating) {
      setRating(recipe?.rating);
    }
  }, [rating]);

  useEffect(() => {
    console.log('point', point);
    setRating(null);
  }, [point]);

  function getStarsSize() {
    const size = point === 'xs' || point === 'sm' ? 20 : 50;
    console.log('size', size);
    return size;
  }

  const ratingChanged = (newRating) => {
    console.log('newRating', newRating);
    setRating(null);
    // setRating(newRating);
    // setRating(newRating);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${recipe?.picture})`,
        }}
        className="recipe-hero container-fluid"
      ></div>
      <div className="px-0 px-sm-3 px-md-5 pb-5">
        <div className="recipe-div container px-4 pb-3 px-md-5 pb-md-5 ">
          <div className="row pb-4">
            <div className="col">
              <div>
                <h2 className="font-raleway display-3 fw-bold mt-4 mb-2">
                  {recipe?.title}
                </h2>
                <div
                  className="font-raleway fw-lighter h4"
                  dangerouslySetInnerHTML={{ __html: recipe?.description }}
                ></div>

                {/* <div>
                  <h2>
                    {' '}
                    Current Device Type {point} {recipe?.rating}
                  </h2>
                </div> */}

                {rating && (
                  <div className={'recipe-stars'}>
                    <ReactStars
                      count={5}
                      value={rating}
                      size={getStarsSize()}
                      isHalf={true}
                      edit={false}
                      onChange={ratingChanged}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row text-center border border-1 p-2">
            <div className="col-6 col-sm-6 col-lg-3 border-end">
              <div>
                <div className="font-fairplay text-color-middle fw-lighter fst-italic">
                  Preparation Time
                </div>
                <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0">
                  100min
                </h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 border-end">
              <div>
                <div className="font-fairplay text-color-middle fw-lighter fst-italic">
                  Cooking Time
                </div>
                <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0">
                  60min
                </h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3 border-end">
              <div>
                <div className="font-fairplay text-color-middle fw-lighter fst-italic">
                  Serves
                </div>
                <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0">
                  6
                </h2>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
              <div>
                <div className="font-fairplay text-color-middle fw-lighter fst-italic">
                  Difficulty
                </div>
                <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0">
                  Easy
                </h2>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="recipe-method-col col-12 col-sm-12 col-lg-8 pt-4 pt-lg-0 border-end order-last order-lg-first">
              <div className="font-fairplay fw-bold h3">Method</div>
              <div className="pb-4">
                <img className="recipe-image" src={recipe?.picture} alt="" />
              </div>

              <div
                className="fs-5"
                dangerouslySetInnerHTML={{ __html: recipe?.preparation }}
              ></div>
            </div>
            <div className="col col-sm-6 col-lg-4 order-first order-lg-last">
              <div className="font-fairplay fw-bold h3">Ingridients</div>
              <div className="pb-4">
                <div className="ingridient-row container p-0 fs-6 pt-2">
                  {recipe &&
                    recipe.ingrediens &&
                    recipe.ingrediens.map((ingredient) => {
                      return (
                        <div className="row" key={uuidv4()}>
                          <div className="col-4 col-sm-4 col-lg-3">
                            <div className="font-roboto fw-lighter fst-italic text-nowrap">
                              {ingredient.amount} {ingredient.unit}
                            </div>
                          </div>
                          <div className="col-8 col-sm-8 col-lg-9">
                            <div className="font-fairplay">
                              {ingredient.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe for ID: {id} */}
        {/* {recipe && (
          <>
            <div>
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
              <div
                dangerouslySetInnerHTML={{ __html: recipe.description }}
              ></div>
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
              <div
                dangerouslySetInnerHTML={{ __html: recipe.preparation }}
              ></div>
            </div>
          </>
        )} */}
      </div>
    </>
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
