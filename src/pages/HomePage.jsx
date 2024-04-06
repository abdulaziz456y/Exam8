import React from 'react';
import Carousel from '../carousel/Carousel';
import Gmail from '../sections/Gmail';
import Icon from '../sections/Icon';
import Appe from '../Appe/Appe.jsx';
import Reklam from '../sections/Reklam.jsx';
import Karta from '../sections/Karta.jsx';
import Carousel2 from '../carousel/Carousel2.jsx';
import Carousel3 from '../carousel/Carousel3.jsx';
import Carousel4 from '../carousel/Carousel4.jsx';
import Info from '../sections/Info.jsx';
import Carousel5 from '../carousel/Carousel5.jsx';

function HomePage() {
  return (
    <div>
     <Carousel />
     <Appe/>
      <Carousel2/>
      <Icon/>
      <Carousel3/>
      <Reklam/>
      <Carousel4/>
      <Info/>
      <Carousel5/>
      <Karta/>
     <Gmail/>
    </div>
  );
}

export default HomePage;
