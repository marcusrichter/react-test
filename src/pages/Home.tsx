import React from 'react';
import JumboTeaser from './../pageElements/Containers/JumboTeaser';
import GreyContainer from './../pageElements/Containers/GreyContainer';
import WhiteContainerSmall from './../pageElements/Containers/WhiteContainerSmall';
import TextCard from './../pageElements/Cards/TextCard';
import ImageRolloverCard from './../pageElements/Cards/ImageRolloverCard';
import Button from './../pageElements/Buttons/Button';

export default () =>  <>
<JumboTeaser backgroundImage="//picsum.photos/id/213/1000/800">
<div className="col-12 d-flex">
  <div className="mx-auto my-auto text-center">
    <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
    <Button type="yellowFilled" className="mt-4" onClick={() => alert('x')}>
        XMehr anzeigen
    </Button>            
  </div>
</div>  
</JumboTeaser>
<GreyContainer>
<div className="row justify-content-around pt-5">  
  <TextCard title="Titel Alpha" subTitle="Thema A" buttonText="mehr">
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </TextCard>
  <TextCard title="Titel Beta" subTitle="Thema B" buttonText="mehr">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </TextCard>
  <TextCard title="Titel Gamma" subTitle="Sonstiges" buttonText="mehr">
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  </TextCard>
 </div> 
</GreyContainer>

<WhiteContainerSmall>
  <div className="mx-auto text-center">
    <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>

    <div className="row justify-content-around pt-5 pb-5">  
        <ImageRolloverCard 
          teaserText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          title="Lorem Ipsum"
          image="//picsum.photos/280/180"
          >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ImageRolloverCard>
        <ImageRolloverCard 
          teaserText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          title="Lorem Ipsum"
          image="//picsum.photos/280/180"
          >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ImageRolloverCard>
        <ImageRolloverCard 
          teaserText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          title="Lorem Ipsum"
          image="//picsum.photos/280/180"
          >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ImageRolloverCard>
    </div>
  </div> 
</WhiteContainerSmall>
</>;