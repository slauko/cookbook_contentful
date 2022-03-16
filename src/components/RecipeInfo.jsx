import React from 'react';
import Util from '../classes/Util';

const serves = Math.floor(2 + Math.random() * 4);

export default function RecipeInfo({ recipe }) {
  // console.log('recipe', recipe);
  return (
    <div className="row text-center border border-1 p-2">
      <div className="col-6 col-sm-6 col-lg-3 border-end px-0">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Preparation Time
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0 px-0 text-nowrap">
            {recipe &&
              '🕒 ' + Util.getTotalTime(recipe?.attributes, 'arbeitszeit')}
          </h2>
        </div>
      </div>
      <div className="col-6 col-sm-6 col-lg-3 border-end px-0">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Cooking Time
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0 px-0 text-nowrap">
            {recipe &&
              '🕒 ' + Util.getTotalTime(recipe?.attributes, 'Koch-/Backzeit')}
          </h2>
        </div>
      </div>
      <div className="col-6 col-sm-6 col-lg-3 border-end">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Serves
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0">
            {/* 🍴 🍽 */}
            {[...Array(serves).keys()].map((num) => '🍴')}
          </h2>
        </div>
      </div>
      <div className="col-6 col-sm-6 col-lg-3">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Difficulty
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-2 mb-2 mb-md-0 text-nowrap">
            {recipe && Util.getDiffuculty(recipe.attributes)}
          </h2>
        </div>
      </div>
    </div>
  );
}
