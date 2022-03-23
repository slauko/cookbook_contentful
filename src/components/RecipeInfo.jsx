import React from 'react';
import Util from '../classes/Util';
import useBreakpoints from '../custom/useBreakpoint';

const serves = Math.floor(2 + Math.random() * 4);
const util = new Util();

export default function RecipeInfo({ recipe }) {
  // hook to get the current breakpoint of screen size
  const point = useBreakpoints();

  function getBorderEnd() {
    const borderend =
      point === 'xs' || point === 'sm' || point === 'md' ? '' : 'border-end';
    // console.log('borderend', borderend);
    return borderend;
  }

  return (
    <div className="row text-center border border-1 p-2 color-light-light">
      <div className="col-6 col-sm-6 col-lg-3 border-end px-0">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Work Time
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-0 mb-2 mb-md-0 px-0 text-nowrap">
            {recipe &&
              '🕒 ' +
                util.getRecipeTime(recipe?.attributes, util.attrKeys.WORKTIME)}
          </h2>
        </div>
      </div>
      <div className={`col-6 col-sm-6 col-lg-3 ${getBorderEnd()} px-0`}>
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Cooking Time
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-0 mb-2 mb-md-0 px-0 text-nowrap">
            {recipe &&
              '🕒 ' +
                util.getRecipeTime(recipe?.attributes, util.attrKeys.COOKTIME)}
          </h2>
        </div>
      </div>
      <div className="col-6 col-sm-6 col-lg-3 border-end">
        <div>
          <div className="font-fairplay text-color-dark fw-lighter fst-italic">
            Serves
          </div>
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-0 mb-2 mb-md-0 p-0">
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
          <h2 className="font-raleway display-7 fw-bold mt-2 mx-0 mb-2 mb-md-0 text-nowrap">
            {recipe &&
              Util.getDiffuculty(util.getRecipeTime(recipe?.attributes))}
          </h2>
        </div>
      </div>
    </div>
  );
}
