import React, { useEffect } from 'react'
import Projects from '../../components/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-20'>
      <Projects/>
    </div>
  )
}

export default ProjectsPage;
