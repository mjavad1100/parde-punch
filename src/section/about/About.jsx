import HeaderImage from '../../img/logo3.jpg'
import './about.css'
import data from './data';
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const About = () => {
  return (

    <section>

      <header id='about' className='header'>
        <div className="container header__container">
          <AnimationOnScroll animateIn="animate__zoomIn">
            <div className="header__profile">
              <img src={HeaderImage} alt='portfolio__image' />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__zoomIn">
            <div className="myinfo">

              <h2 className='text-center text-duty m-2'>پرده پانچ </h2>
              <p className='myptag'>خیابان پیروزی جنب کریمشاهیان پ شماره 23
              </p>
            </div>

            <div className="header__cta">
              <a href='#services' className='bttn primary'>خدمات</a>
              <a href='#contact' className='bttn light'>آدرس  </a>

            </div>
          </AnimationOnScroll>

          <div className="header__socials">

            {
              data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }


          </div>
        </div>

      </header>

    </section>


  );
};

export default About;