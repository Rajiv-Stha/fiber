import React from 'react'
import 'animate.css'
import { useInView } from 'react-intersection-observer'

const AnimationComponent = ({ animationClass, children})=>{
    const { ref, inView } = useInView({
        triggerOnce:true,
        threshold: 0.05,
});
  return (
    <div
    ref={ref}
    className={inView ? `animate__animated ${animationClass}` : ''}
    >
     {children} 
    </div>
  );
};

export default AnimationComponent
