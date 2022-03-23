// import Alert from 'bootstrap/Alert';
// import { Carousel } from 'bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import './css/carousel.css';

/**
 *
 * @param {images} images -> erwartet Objekt-Array von der Strktur [{title: 'title', url: <imgUrl>, description: 'Bild-Beschreibung'}, {title: 'Other title' ...}]
 * @returns
 */
export default function RecipeCarousel({
  title,
  description,
  images,
  id,
  display = 'display-4',
}) {
  const navigate = useNavigate();
  // console.log('images', images);

  return (
    <section className="carousel-section container-fluid p-0 m-0">
      {/* <div className="container pb-4"> */}
      <div>
        {/* // ######## Carousel Header */}
        <div className="carousel-outer rounded">
          <div className="row">
            <div className="col">
              <h2
                className={`carousel-header font-p text-white text-center ${display} mt-4 mx-2 mb-2 mb-md-0`}
              >
                {title}
              </h2>
              <p className="text-white text-center fst-italic d-none d-md-block">
                {description}
              </p>
            </div>
          </div>
          {/* <div className="carousel-inner rounded border border-dark border-3"> */}
          <div className="carousel-inner rounded">
            <Carousel>
              {images &&
                images.map((img, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        onClick={() => navigate(`/recipe/${img.id}`)}
                        style={{ cursor: 'pointer' }}
                        className="carousel-item-img d-block w-100"
                        src={img?.url}
                        alt={'slide ' + (index + 1)}
                      />
                      <Carousel.Caption className="d-none d-md-block bg-dark bg-gradient bg-opacity-50 mx-auto">
                        <h3>{img?.title}</h3>
                        <p>{img?.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
        </div>

        {/* <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert> */}
      </div>
    </section>
  );
}
