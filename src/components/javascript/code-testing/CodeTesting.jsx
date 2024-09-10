

import React, {useEffect, useState} from 'react';
import {useRenderCounter} from 'components/react/hooks/useRenderCounter/UseRenderCounter';


const Carousel = ({ delay, children }) => {
	const [current, setCurrent] = useState(0);
	const hasChildren = React.Children.count(children) > 0;
	const childrenArray = React.Children.toArray(children);
	const lastIdx = childrenArray.length - 1;


  useEffect(() => {
    let timer = 0;
    const next = () => {
      timer = setInterval(() => {
			nextSlide();
      }, delay)
    }

    if (childrenArray.length && delay) {
		 next();
    }

    return () => {
      clearInterval(timer);
    }

  }, [current, childrenArray.length, delay])
	
	const nextSlide = () => {
		setCurrent(current => current < lastIdx ? current + 1 : 0);
	}

	const previousSlide = () => {
		setCurrent(current => current > 0 ? current - 1 : lastIdx);
	}
	

  return (
    <div className="carousel">
		  {hasChildren && (
			  <>
				<div className='current'>
					{childrenArray[current]}
				</div>
				{childrenArray.length >= 2 && <div className='buttons'>
					<button className='button-next' onClick={nextSlide}>Next</button>
					<button className='button-previous' onClick={previousSlide}>Previous</button>
				</div>
				}
			  </>
		  )}
    </div>
  );
};


export default function CodeTesting() {

	return (
		<div>
			<Carousel delay={2000}>
				{'test'}
				{42}
				<span>I'm a span</span>
			</Carousel>
		</div>
	)
}