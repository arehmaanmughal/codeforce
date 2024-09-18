import React, { useEffect } from 'react'
import About from '../../components/About';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-32'>
      <About/>
    </div>
  )
}

export default AboutPage;
