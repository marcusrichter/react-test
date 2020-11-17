import React from 'react';
import WhiteContainer from '../../pageElements/Containers/WhiteContainer';
import TextTeaserHalfElement from '../../pageElements/HalfElements/TextTeaserHalfElement';
import ImageTeaserHalfElement from '../../pageElements/HalfElements/ImageTeaserHalfElement';
import WhiteContainerSmall from "../../pageElements/Containers/WhiteContainerSmall";
import ImageHeap from "../../pageElements/Images/ImageHeap";
import useScrollPosition from '@react-hook/window-scroll';

const scrollHeight = () => Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
) - window.innerHeight;
  
export default () => {
    const thresholdBgChange : number = 70.0;
    const scrollY : number = useScrollPosition(60);    
    const scrollPercent : number = scrollY * 100.0 / scrollHeight();
    const bgColor : number = scrollPercent > thresholdBgChange ? 255.0 - (255.0 * ((scrollPercent - thresholdBgChange) / (100.0 - thresholdBgChange))) : 255;
    const bgColorString : string = 'rgb(' + bgColor + ',' + bgColor + ',' + bgColor + ')';
    
    document.body.style.backgroundColor = bgColorString;

    const bgStyles : any = { 
        backgroundColor: bgColorString,
    };

    const fontColorStyle : any = scrollPercent > thresholdBgChange ? { color: '#ffffff'} : {};

    return <>
        <WhiteContainer>
            <div className="row">
                <TextTeaserHalfElement infoText="Now" teaserText="Teaser Text" endTeaserText="Lorem Ipsum"></TextTeaserHalfElement>
                <ImageTeaserHalfElement infoText="Then" image="https://picsum.photos/id/356/800/800"></ImageTeaserHalfElement>
            </div>
            <div className="row mt-5 mb-5"></div>
        </WhiteContainer>
        <WhiteContainerSmall style={bgStyles}>
            <div className="mx-auto text-center">
                <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000" style={fontColorStyle}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000" style={fontColorStyle}>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
                <ImageHeap images={['https://picsum.photos/id/356/800/800', 'https://picsum.photos/id/356/800/800', 'https://picsum.photos/id/356/800/800']}/>
            </div>
        </WhiteContainerSmall>
        <WhiteContainerSmall style={bgStyles}>
            <h2 className="mb-4" style={fontColorStyle}>Sonstiges</h2>
            <div className="mx-auto text-center pt-5 pb-5">
                <h3 className="mb-4 text-nowrap" style={fontColorStyle}>sed diam nonumy eirmod tempore</h3>
            </div>
        </WhiteContainerSmall>
    </>
};
