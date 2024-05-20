import './services.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const CardSlide = (data) => {
    const {title, image,id} = data;
    return (
        <div className="image-flip">
            <div className="mainflip">
            <AnimationOnScroll animateIn="animate__bounceIn">

                <div className="frontside">
                    <img src={image} id={id} alt="third" />
                </div>
                <div className="backside hoverclass">
                    <div className="card card-body text-center p-5 mt-4">
                        <p className="card-text text-white text-justify">
                            {title}
                        </p>
                        <a href='#portfolio' className='bttn light'>اطلاعات بیشتر ...</a>

                    </div>
                </div>
                </AnimationOnScroll>

            </div>
            
        </div>

    );
}

export default CardSlide;
