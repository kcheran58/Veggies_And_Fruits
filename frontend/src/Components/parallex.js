import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import your custom styles if needed

function Parallax() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src="https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          className="d-block w-100 mobile-image"
        />
        <Carousel.Caption>
        <h3 style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Fresh and Juicy</h3>
<p style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>"Savor the goodness of fresh fruits and vegetables; each bite is a celebration of life and vitality."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          src="https://wallpapercave.com/wp/wp4184149.jpg" // Replace with your image URL
          alt="Second slide"
          className="d-block w-100 mobile-image"
        />
        <Carousel.Caption >
        <h3 style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Fruits: Nature's Candy</h3>
<p style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"400"}}>"The colors of fruits are like a vibrant palette, painting health and wellness into our lives."</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg" // Replace with your image URL
          alt="Third slide"
          className="d-block w-100 mobile-image"
        />
        <Carousel.Caption>
        <h3 style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"700"}}>Vegetables: Garden of Nutrition</h3>
<p style={{fontFamily: "'Josefin Sans', sans-serif",fontWeight:"500"}}>"Vegetables, a symphony of flavors and colors, nourish our bodies and delight our senses."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Parallax;
