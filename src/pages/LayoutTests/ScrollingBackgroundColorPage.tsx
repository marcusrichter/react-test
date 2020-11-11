import React from 'react';
import WhiteContainer from '../../pageElements/Containers/WhiteContainer';
import TextTeaserHalfElement from '../../pageElements/HalfElements/TextTeaserHalfElement';
import ImageTeaserHalfElement from '../../pageElements/HalfElements/ImageTeaserHalfElement';
import ImageRolloverCard from "../../pageElements/Cards/ImageRolloverCard";
import WhiteContainerSmall from "../../pageElements/Containers/WhiteContainerSmall";

export default () => <>
    <WhiteContainer>
        <div className="row">
            <TextTeaserHalfElement infoText="Now" teaserText="Teaser Text" endTeaserText="Lorem Ipsum"></TextTeaserHalfElement>
            <ImageTeaserHalfElement infoText="Then" image="https://picsum.photos/id/356/800/800"></ImageTeaserHalfElement>
        </div>
        <div className="row mt-5 mb-5"></div>
    </WhiteContainer>
    <WhiteContainerSmall>
        <div className="mx-auto text-center">
            <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
            <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>

            <div className="row justify-content-around pt-5 pb-5 image-heap">
                <img src="https://picsum.photos/id/356/800/800"/>
                <img src="https://picsum.photos/id/356/800/800"/>
                <img src="https://picsum.photos/id/356/800/800"/>
            </div>
        </div>
    </WhiteContainerSmall>
</>
