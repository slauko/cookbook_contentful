import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactStars from 'react-rating-stars-component';
import './css/card.css';

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  function getTotalTime(attrAr) {
    const str = 'gesamtzeit';

    let ret = '5 min.';
    attrAr.forEach((attr) => {
      const index = attr?.toLowerCase().indexOf(str);
      if (index >= 0) {
        // console.log(attr.substring(index + str.length + 4));
        ret = attr
          .substring(index + str.length + 4)
          .replaceAll('Minuten', 'min')
          .replaceAll('Stunden', 'h')
          .replaceAll('Stunde', 'h');
      }
    });

    return ret;
  }

  function getDiffuculty(attrAr) {
    const pre = '🍵 ';
    if (
      attrAr.some(
        (attr) =>
          attr.toLowerCase().indexOf('gesamtzeit') >= 0 &&
          attr.toLowerCase().indexOf('stunde') >= 0
      )
    ) {
      return pre + 'hard';
    } else {
      const total = getTotalTime(attrAr);

      try {
        const split1 = total.split(' ')[1];
        // console.log('split1', split1);
        if (total.indexOf(' h ') < 0 && +split1 <= 35) {
          return pre + 'easy';
        }
      } catch (error) {
        return pre + 'medium';
      }

      return pre + 'medium';
    }
  }

  function getDateTime() {
    if (recipe && recipe.fields.dateCreated) {
      return (
        '📅 ' +
        new Date(recipe.fields.dateCreated).toLocaleString('de-DE', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
      );
    }
  }

  return (
    <div onClick={() => navigate(`/recipe/${recipe.sys.id}`)} className="card">
      <div
        className="card-img-div"
        data-difficulty={getDiffuculty(recipe?.fields?.attributes)}
        data-time={`🕒 ${getTotalTime(recipe?.fields?.attributes)}`}
      >
        <img
          className="card-img-top"
          src={recipe.fields.imageUrl}
          alt="Card pic"
        />
      </div>
      <div>
        <div data-date={getDateTime()} className="card-body pb-1">
          <h6 className="card-title fw-bold font-raleway">
            {recipe.fields.title}
          </h6>
          <p
            className="card-text font-raleway"
            // dangerouslySetInnerHTML={{
            //   __html: documentToHtmlString(recipe.fields.description),
            // }}
          >
            {recipe.fields.descriptionNonrich}
          </p>
        </div>
      </div>
      <div className="card-footer d-flex align-items-end p-0 px-1">
        <div className="card-footer-infos d-flex justify-content-end">
          <ReactStars
            count={5}
            value={recipe?.fields?.rating}
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
