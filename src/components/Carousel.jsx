// import Alert from 'bootstrap/Alert';
// import { Carousel } from 'bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';

/**
 *
 * @param {images} images -> erwartet Objekt-Array von der Strktur [{title: 'title', url: <imgUrl>, description: 'Bild-Beschreibung'}, {title: 'Other title' ...}]
 * @returns
 */
export default function RecipeCarousel({ images }) {
  console.log('images', images);
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Carousel>
        {images &&
          images.map((img, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
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

      {/* <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert> */}
    </div>
  );
}
