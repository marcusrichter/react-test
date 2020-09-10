import React from 'react';
import WhiteContainerSmall from './../../pageElements/Containers/WhiteContainerSmall';
import ShiftAgainstCard from '../../pageElements/Cards/ShiftAgainstCard';

export default () => <>
    <WhiteContainerSmall>
        <div className="row">
            <div className="mx-auto text-center">
                <h2 className="mb-4" data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
            </div>    
        </div>
        <div className="row mt-5 mb-5"></div>
        <div className="row">
            <ShiftAgainstCard image="https://picsum.photos/300/300" title="Lorem Ipsum" subTitle="Sonstiges">
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </ShiftAgainstCard>
            <ShiftAgainstCard reverse={true} image="https://picsum.photos/300/300" title="Lorem Ipsum" subTitle="Sonstiges">
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </ShiftAgainstCard>
            <ShiftAgainstCard image="https://picsum.photos/300/300" title="Lorem Ipsum" subTitle="Sonstiges">
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </ShiftAgainstCard>
            <ShiftAgainstCard reverse={true} image="https://picsum.photos/300/300" title="Lorem Ipsum" subTitle="Sonstiges">
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </ShiftAgainstCard>
        </div>
    </WhiteContainerSmall>    
</>;
