import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Html } from '@react-three/drei';
import { useSpring, animated } from 'react-spring';

const AboutSection = ({ progress }) => {
  const scrollAnimation = useSpring({
    transform: `translateX(${progress * 100}%)`,
  });

  return (
    <Canvas>
      <Html>
        <animated.div className="about-section" style={scrollAnimation}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis
            eget augue eget facilisis. Donec gravida, lectus eget malesuada interdum, ipsum metus
            ultricies est, in aliquet massa est quis nisl.
          </p>
        </animated.div>
      </Html>
    </Canvas>
  );
};

const App = () => {
  const progress = 0.5; // Set a sample progress value (0 to 1) for testing

  return (
    <div className="App">
      <AboutSection progress={progress} />
    </div>
  );
};

export default App;
