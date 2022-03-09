// import Alert from 'bootstrap/Alert';
// import { Carousel } from 'bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';

export default function RecipeCarousel() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.oetker.de/Recipe/Recipes/oetker.de/de-de/baking/image-thumb__114338__RecipeDetailsLightBox/bienen-kuchen.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    </div>
  );
}
