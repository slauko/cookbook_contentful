import React from 'react';
import RecipeCard from './Card';
import './css/cards.css';

export default function RecipeCards({ recipes }) {
  return (
    <section className="card-section container mt-3 mb-5">
      {/* <!-- ######## Card Header  --> */}
      <div className="row">
        <div className="col">
          <h2 className="font-p text-color-dark text-center display-5 mx-2 mt-3 mt-md-5">
            Search Results
          </h2>
          <p className="text-center fst-italic d-none d-md-block">
            Some representative placeholder content for the description
          </p>
        </div>
      </div>

      {/* <!-- ###################### -->
          <!-- ######## Recipe Cards  --> */}
      <div className="row justify-content-center mb-2">
        {recipes &&
          recipes.map((recipe) => {
            // console.log(recipe.fields.image[0]);
            return (
              <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        {/* <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div>
        <div className="card-col col-8 col-sm-6 col-lg-3 py-2">
          <RecipeCard />
        </div> */}
      </div>
    </section>
  );
}
