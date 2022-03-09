import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './css/card.css';

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const id = '17WMIvrpXN12XIKI7Q3rPh';

  console.log(
    'test',
    recipe.fields.description.content[0].content.reduce(
      (acc, curr) => (acc += curr.value),
      ''
    )
  );

  return (
    <div className="card">
      <div className="card-header text-white d-flex align-items-end justify-content-between">
        <div style={{ margin: '0 0 0.1rem .4rem' }}>Sweet</div>
        <div>
          <i className="fa fa-cheese"></i>
        </div>
      </div>
      <img
        className="card-img-top"
        src={recipe.fields.image[0].fields.file.url}
        alt="Card pic"
      />
      <div className="card-body">
        <h5 className="card-title fw-bold font-raleway">
          {recipe.fields.title}
        </h5>
        <p className="card-text font-roboto">
          {recipe.fields.description.content[0].content.reduce(
            (acc, curr) => (acc += curr.value),
            ''
          )}
        </p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => navigate(`/recipe/${recipe.sys.id}`)}
            className="btn color-dark text-white"
          >
            Show me
          </button>
        </div>
      </div>
      <div className="card-footer text-muted color-light-middle d-flex align-items-end">
        <div>
          <i className="far fa-clock"></i>
        </div>{' '}
        <div style={{ margin: '0 0 0.1rem .4rem' }}>50 min</div>
      </div>
    </div>
  );
}
