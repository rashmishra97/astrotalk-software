import Carousel from 'react-bootstrap/Carousel'

function SliderComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="One"
        />
        <Carousel.Caption>
          <h3>dummy text 1</h3>
          <p>dummy text 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="two"
        />
        <Carousel.Caption>
          <h3>Label for first slide</h3>
          <p>Sample Text for Image One</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="three"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image two</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderComponent
