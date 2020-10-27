import React from 'react';
import WhiteContainerSmall from '../../pageElements/Containers/WhiteContainerSmall';
import JumboTeaser from '../../pageElements/Containers/JumboTeaser';
import Button from '../../pageElements/Buttons/Button';
import { Element, scroller } from 'react-scroll';

const scrollForMore = () => {
    scroller.scrollTo('moreScrollToElement', {
      duration: 1500,
      delay: 100,
      smooth: true,            
      offset: -100, 
    });
  };

export default () => <>
    <JumboTeaser backgroundImage="//picsum.photos/1000/1600" parallax={true}>
        <div className="col-12 d-flex">
        <div className="mx-auto my-auto text-center">
            <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
            <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
            <Button type="yellowFilled" className="mt-4" onClick={() => scrollForMore()}>
                Mehr anzeigen
            </Button>            
        </div>
        </div>  
    </JumboTeaser>
    <WhiteContainerSmall>
        <div className="row mt-5 mb-5"></div>
        <div className="row">
            <Element name="moreScrollToElement"></Element>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
            <p>Lsaddsds dasasdmd adsadd adad adssd dad d d ad asd sd </p>
        </div>
    </WhiteContainerSmall>    
</>;
