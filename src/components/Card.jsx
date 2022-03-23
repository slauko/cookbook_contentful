import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactStars from 'react-rating-stars-component';
import './css/card.css';
import Util from '../classes/Util';

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/recipe/${recipe.id}`)} className="card">
      <div
        className="card-img-div"
        data-difficulty={Util.getDiffuculty(recipe?.totalTime)}
        data-time={`🕒 ${recipe?.totalTime}`}
      >
        <img className="card-img-top" src={recipe.url} alt="Card pic" />
      </div>
      <div>
        <div data-date={Util.getDateTime(recipe)} className="card-body pb-1">
          <h6 className="card-title fw-bold font-raleway">{recipe.title}</h6>
          <p
            className="card-text font-raleway"
            // dangerouslySetInnerHTML={{
            //   __html: documentToHtmlString(recipe.description),
            // }}
          >
            {recipe.description}
          </p>
        </div>
      </div>
      <div className="card-footer d-flex align-items-end p-0 px-1">
        <div className="card-footer-infos d-flex justify-content-end">
          <ReactStars
            count={5}
            value={recipe?.rating}
            size={20}
            isHalf={true}
            edit={false}
          />
          {/* <sub style={{ paddingTop: '12px' }}>{recipe?.fields?.rating} </sub> */}
          {/* {recipe &&
            recipe.metadata.tags?.map((tag, index) => {
              if (index <= 2) {
                return (
                  <>
                    <div className="recipe-tag">#{tag.sys.id}</div>
                  </>
                );
              }
            })} */}
        </div>
      </div>
    </div>
  );
}
