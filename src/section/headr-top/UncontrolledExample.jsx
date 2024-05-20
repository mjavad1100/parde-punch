import Carousel from 'react-bootstrap/Carousel';
import Imagei from '../../img/slider2.jpg'
import Imageii from '../../img/slider3.jpg'
import Imageiiiii from '../../img/slider4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={Imagei}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={Imageii}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={Imageiiiii}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;