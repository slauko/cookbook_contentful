import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactStars from 'react-rating-stars-component';
import './css/card.css';

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const id = '17WMIvrpXN12XIKI7Q3rPh';

  // console.log(
  //   'test',
  //   recipe.fields.description.content[0].content.reduce(
  //     (acc, curr) => (acc += curr.value),
  //     ''
  //   )
  // );

  return (
    <div onClick={() => navigate(`/recipe/${recipe.sys.id}`)} className="card">
      {/* <div className="card-header text-white d-flex align-items-end justify-content-evenly gap-2">
        {recipe &&
          recipe.fields.attributes?.map((attr, index) => {
            if (index <= 2) {
              return (
                <>
                  <div className="recipe-attr">{attr}</div>
                </>
              );
            }
          })}
      </div> */}
      <div
        className="card-img-div"
        // data-difficulty={recipe?.fields?.attributes[1]}
        // data-time={recipe?.fields?.attributes[0]}
      >
        <img
          className="card-img-top"
          src={recipe.fields.imageUrl}
          alt="Card pic"
        />
      </div>
      <div>
        <div
          // data-date={recipe?.fields?.attributes[2]}
          className="card-body pb-1"
        >
          <h5 className="card-title fw-bold font-raleway">
            {recipe.fields.title}
          </h5>
          <p
            className="card-text font-roboto"
            // dangerouslySetInnerHTML={{
            //   __html: documentToHtmlString(recipe.fields.description),
            // }}
          >
            {recipe.fields.descriptionNonrich}
          </p>
          {/* <div className="text-end" style={{ fontSize: 'small' }}>
            {recipe?.fields?.attributes[0]}
          </div> */}
          {/* <div className="d-flex justify-content-center">
            <button
              onClick={() => navigate(`/recipe/${recipe.sys.id}`)}
              className="btn color-dark text-white"
            >
              Show me
            </button>
          </div> */}

          <ReactStars
            count={5}
            value={recipe?.fields?.rating}
            size={20}
            isHalf={true}
            edit={false}
          />
        </div>
      </div>
      <div className="card-footer color-light-middle d-flex align-items-end p-1">
        <div className="card-footer-infos d-flex">
          {recipe &&
            recipe.metadata.tags?.map((tag, index) => {
              if (index <= 2) {
                return (
                  <>
                    <div className="recipe-tag">#{tag.sys.id}</div>
                  </>
                );
              }
            })}
          {/* <div>50 min</div>
          <div>50 min</div> */}
        </div>
      </div>
    </div>
  );
}
