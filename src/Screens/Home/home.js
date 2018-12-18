import React from 'react';
import Content1 from './content1/content';
import Content2 from './content2/content';
import Content3 from './content3/content';


function Home() {

  return (
    <div className='container'>
      <Content1 />
      <Content2 />
      <Content3 />
    </div>  
  );
}

export default Home;