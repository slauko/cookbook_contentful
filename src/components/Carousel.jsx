// import Alert from 'bootstrap/Alert';
// import { Carousel } from 'bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import './css/carousel.css';

/**
 *
 * @param {images} images -> erwartet Objekt-Array von der Strktur [{title: 'title', url: <imgUrl>, description: 'Bild-Beschreibung'}, {title: 'Other title' ...}]
 * @returns
 */
export default function RecipeCarousel({ title, description, images }) {
  console.log('images', images);
  return (
    <section class="carousel-section container-fluid">
      <div class="container pb-4">
        {/* // ######## Carousel Header */}
        <div class="carousel-outer px-sm-2 px-md-3 rounded">
          <div class="row">
            <div class="col">
              <h2 class="carousel-header font-p text-white text-center display-3 mt-4 mx-2 mb-2 mb-md-0">
                {title}
              </h2>
              <p class="text-white text-center fst-italic d-none d-md-block">
                {description}
              </p>
            </div>
          </div>
          <div class="carousel-inner rounded">
            <Carousel className="carousel-section container-fluid">
              {images &&
                images.map((img, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="carousel-item-img d-block w-100"
                        src={img.url}
                        alt={'slide ' + (index + 1)}
                      />
                      <Carousel.Caption>
                        <h3>{img.title}</h3>
                        <p>{img.description}</p>
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
