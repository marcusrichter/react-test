import React from 'react';
import WhiteContainerSmall from '../../pageElements/Containers/WhiteContainerSmall';
import JumboTeaser from '../../pageElements/Containers/JumboTeaser';
import Button from '../../pageElements/Buttons/Button';
import { Element, scroller } from 'react-scroll';
import LightGreyContainer from '../../pageElements/Containers/LightGreyContainer';
import Plx from 'react-plx';

const scrollForMore = () => {
    scroller.scrollTo('moreScrollToElement', {
        duration: 1500,
        delay: 100,
        smooth: true,            
        offset: -100, 
    });
};

const parallaxScale = [
{
    start: 0,
    end: 800,
        properties: [
            {
                startValue: 1,
                endValue: 1.4,
                property: 'scale',
            },
        ],
    },
];

const parallaxUnScaleAndGoTop = [
{
    start: 0,
    end: 400,
    easing: 'easeOutSine',
    properties: [
            {
                startValue: 1.5,
                endValue: 1.0,
                property: 'scale',
            },
            {
                startValue: 400,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
];

const iconParallax = (index: number): Array<any> => 
[
    {
        start: 0,
        end: 400 + 300 * index,
        easing: 'easeIn',
        properties: [
            {
                startValue: 1000,
                endValue: 0,
                property: 'translateX',
            },
        ],
    },
];

const listEntryTextParallax = (index: number): Array<any> => 
[
    {
        start: 0,
        end: 1300 + 280 * index,
        easing: 'ease',
        properties: [
            {
                startValue: -3.5,
                endValue: 1,
                property: 'opacity'
            },
        ],
    },
];

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
    <LightGreyContainer>
        <Element name="moreScrollToElement"></Element>
        <div className="row pt-5 pb-5">
            <div className="mx-auto text-center">
            <Plx parallaxData={ parallaxScale }>
                <h2 className="mb-4 mt-3">Parrallax Plx Test</h2>                             
            </Plx>   

            <Plx parallaxData={ parallaxUnScaleAndGoTop }>
                <h3 className="mb-4">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
            </Plx>
            </div>
        </div>
    </LightGreyContainer>
    <WhiteContainerSmall>
        <div className="row mt-5 mb-5"></div>
        <div className="row pb-5">
            <div className="col-12">
                <ol className="list fancy-list-one mx-auto">
                    <li>
                        <Plx parallaxData={ iconParallax(1) }>
                            <h2 id="x1">Entry one</h2>
                        </Plx>                    
                        <Plx parallaxData={ listEntryTextParallax(1) }>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                        </Plx>
                    </li>
                    <li>
                        <Plx parallaxData={ iconParallax(2) }>
                            <h2 id="x1">Entry two2</h2>
                        </Plx>    
                        <Plx parallaxData={ listEntryTextParallax(2) }>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                        </Plx>    
                    </li>
                    <li>
                        <Plx parallaxData={ iconParallax(3) }>
                            <h2 id="x1">Entry three</h2>
                        </Plx>    
                        <Plx parallaxData={ listEntryTextParallax(3) }>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                        </Plx>
                    </li>
                </ol>                
            </div>
        </div>
        <div className="row pb-5"></div>
        <div className="row pb-5"></div>
    </WhiteContainerSmall>    
</>;
