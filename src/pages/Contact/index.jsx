import React, { useEffect } from 'react'
import Contact from '../../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-32'>
      <Contact/>
    </div>
  )
}

export default ContactPage;
