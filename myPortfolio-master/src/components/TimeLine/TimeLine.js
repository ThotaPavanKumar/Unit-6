import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id = "about">
      <br /><br />
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      An Aspiring Full Stack Web developer with a specialized skill set that enables me to build robust web applications. I am adept in both front-end and back-end and have an eye for performance and accuracy.  <br />
      I am adaptable, proficient in remote collaboration, and committed to achieving organizational goals. With a knack for problem-solving and analytics, I am passionate about solving Algorithmic problems with a good hold on Data Structures.
      </SectionText>
      <CarouselContainer ref = {carouselRef} onScroll = {handleScroll}>
        <>
          {TimeLineData.map((item, index) => {
            <CarouselMobileScrollNode key = {index} final = {index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index = {index}
                id={`carousel__item-${index}`}
                active = {activeItem}
                onClick = {(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          })}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key = {index}
            index = {index}
            active = {activeItem}
            onClick = {(e) => handleClick(e, index)}
          >
            <CarouselButtonDot active = {activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
