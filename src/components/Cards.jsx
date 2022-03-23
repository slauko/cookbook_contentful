import React from 'react';
import RecipeCard from './Card';
import './css/cards.css';

export default function RecipeCards({ recipes, title, description }) {
  // console.log(recipes);
  return (
    <section className="card-section container-fluid p-0 pb-5">
      {/* <!-- ######## Card Header  --> */}
      <div className="row">
        <div className="col">
          <h2 className="font-p text-color-dark text-center display-5 mx-2 mt-3">
            {title}
          </h2>
          <p className="text-center fst-italic d-none d-md-block">
            {description}
          </p>
        </div>
      </div>

      {/* <!-- ###################### -->
          <!-- ######## Recipe Cards  --> */}
      <div className="row justify-content-center mb-2 mx-0">
        {recipes &&
          recipes.map((recipe) => {
            // console.log(recipe.fields.image[0]);
            return (
              <div
                key={recipe.id}
                className="card-col col-6 col-sm-4 col-md-3 col-lg-2 py-2"
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
      </div>
    </section>
  );
}
