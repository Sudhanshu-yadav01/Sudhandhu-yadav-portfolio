import React from "react";
import SplitText from "../Reactbits/SplitText/SplitText.jsx";
import BlurText from "../Reactbits/BlurText/BlurText.jsx";
import MaskedDiv from "./components/ui/masked-div.tsx";
const Homepage = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};

  const handleAnimationCompletetext = () => {
  console.log('Animation completed!');
};


  return (
    <>
    <div className="mt-28" >
          <div className="items-between m-auto mt-4 flex max-w-5xl flex-wrap justify-between gap-5">
   
     

      
    </div>
    </div>
    <div className="flex items-center justify-center mt-2 ">
      <SplitText
        text="Hello "
        className="text-xl lg:text-8xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{opacity: 0, y: 40}}
        to={{opacity: 1, y: 0}}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>

<div className="flex justify-center">
<div className="flex w-[70%] items-center lg:mt-18 text-center justify-center px-3">
    <BlurText
  text="Hi, I am Sudhanshu Yadav, a passionate full-stack developer skilled in building dynamic, scalable web applications using Spring Boot, React, and Next.js"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationCompletetext}
  className="text-sm lg:text-2xl lg:px-9   mt-10"
/>
</div>
</div>
    </>
  );
};

export default Homepage;
