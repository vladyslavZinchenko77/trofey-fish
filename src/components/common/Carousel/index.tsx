import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FishCard from '@/components/common/FishCard';

interface CardData {
  title: string;
  description: string;
  img: string;
}

interface CarouselProps {
  cards: CardData[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
   
  };

  return (
    <div className="cursor-grab">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            <FishCard
              fishTitle={card.title}
              fishDesc={card.description}
              imgUrl={card.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


