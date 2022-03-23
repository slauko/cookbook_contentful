import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { createClient } from 'contentful';
import DetailedRecipeClass from '../classes/DetailedRecipeClass';
import './css/recipe.css';

import useBreakpoints from '../custom/useBreakpoint';
import RecipeInfo from '../components/RecipeInfo';
import CookbookService from '../api/recipeService';

// const client = createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_AUTH_TOKEN,
// });

export default function Recipe({ client }) {
  const { id } = useParams();

  // hook to get the current breakpoint of screen size
  const point = useBreakpoints();

  useEffect(() => {
    // client.getEntry(id).then(function (entry) {
    //   // console.log(entry);
    //   setRecipe(new DetailedRecipeClass(entry));
    // });

    CookbookService.getRecipe(id).then((recipe) => {
      console.log('recipe Postegres', recipe);
      setRecipe(recipe);
    });
  }, []);

  const [recipe, setRecipe] = useState(null);
  const [showRating, setShowRating] = useState(false);
  useEffect(() => {
    if (recipe) {
      setShowRating(recipe ? true : false);
    }
  }, [recipe]);

  useEffect(() => {
    if (!showRating) {
      setShowRating(true);
    }
  }, [showRating]);

  useEffect(() => {
    console.log('point', point);
    setShowRating(false);
  }, [point]);

  function getStarsSize() {
    const size = point === 'xs' || point === 'sm' ? 30 : 50;
    // console.log('size', size);
    return size;
  }

  function getBorderEnd() {
    const borderend =
      point === 'xs' || point === 'sm' || point === 'md' ? '' : 'border-end';
    // console.log('borderend', borderend);
    return borderend;
  }

  const ratingChanged = (newRating) => {
    console.log('newRating', newRating);
    showRating(false);
    // setRating(newRating);
    // setRating(newRating);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${recipe?.images[0].url})`,
        }}
        className="recipe-hero container-fluid"
      ></div>
      <div className="container px-0 px-sm-3 px-md-5 pb-5">
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

                {showRating && (
                  <div className={'recipe-stars'}>
                    <ReactStars
                      count={5}
                      value={recipe?.rating}
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

          <RecipeInfo recipe={recipe} />

          <div className="row pt-5">
            <div
              className={`recipe-method-col col-12 col-sm-12 col-lg-8 pt-4 pt-lg-0 ${getBorderEnd()} order-last order-lg-first`}
            >
              <div className="font-fairplay fw-bold h3">Method</div>
              <div className="pb-4">
                <img
                  className="recipe-image"
                  src={recipe?.images[0]?.url}
                  alt=""
                />
              </div>

              {recipe &&
                recipe.preparation &&
                recipe.preparation.map((prep) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="fs-5 font-raleway"
                      dangerouslySetInnerHTML={{ __html: prep.description }}
                    ></div>
                  );
                })}
            </div>
            <div className="col col-sm-8 col-lg-4 order-first order-lg-last">
              <div className="font-fairplay fw-bold h3">Ingridients</div>
              <div className="pb-4">
                <div className="ingridient-row container p-0 fs-6 pt-2">
                  {recipe &&
                    recipe.ingridients &&
                    recipe.ingridients.map((ingredient) => {
                      return (
                        <div
                          className="recipe-ingridient pt-2 fs-5 ms-2"
                          key={uuidv4()}
                        >
                          <div className="">
                            <div className="recipe-ingridient-unit font-roboto fw-lighter fst-italic text-nowrap">
                              {ingredient.amount === 0 ? '' : ingredient.amount}{' '}
                              {ingredient.unit}
                            </div>
                          </div>
                          <div className="">
                            <div className="font-raleway">
                              {ingredient.description}
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
      </div>
    </>
  );
}
