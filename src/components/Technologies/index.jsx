import React from 'react';
import Marquee from 'react-marquee-slider';
import TailwindCSS from '../../assets/tailwind.svg';
import ReactLogo from '../../assets/react.svg';
import NextJs from '../../assets/nextjs.svg';
import Javascript from '../../assets/javascript.svg';
import Python from '../../assets/python.svg';
import Java from '../../assets/java.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import Angular from '../../assets/angular.svg';
import Ruby from '../../assets/ruby.svg';
import Figma from '../../assets/figma.svg';
import Php from '../../assets/php.svg';
import Adobe from '../../assets/adobe.svg';
import Css from '../../assets/css.svg';
import Postman from '../../assets/postman.svg';

const Technologies = () => {
  const logos = [
    { src: TailwindCSS, alt: 'Tailwind CSS' },
    { src: ReactLogo, alt: 'React JS' },
    { src: NextJs, alt: 'Next.js' },
    { src: Javascript, alt: 'Javascript' },
    { src: Python, alt: 'Python' },
    { src: Java, alt: 'Java' },
    { src: Css, alt: 'CSS' },
    { src: Bootstrap, alt: 'Bootstrap' },
    { src: Angular, alt: 'Angular' },
    { src: Ruby, alt: 'Ruby' },
    { src: Postman, alt: 'Postman' },
    { src: Figma, alt: 'Figma' },
    { src: Php, alt: 'PHP' },
    { src: Adobe, alt: 'Adobe' },
  ];

  return (
    <section className="py-12">
      <Marquee velocity={20} resetAfterTries={200} className="flex items-center">
        {logos.map((logo, index) => (
          <div key={index} className="mx-6">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain" // Adjust the height as needed
              loading='lazy'
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Technologies;
