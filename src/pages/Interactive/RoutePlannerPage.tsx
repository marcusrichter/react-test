import React, {useState, useRef, useEffect} from "react";
import GreyContainer from "../../pageElements/Containers/GreyContainer";
import WhiteContainerSmall from "../../pageElements/Containers/WhiteContainerSmall";
import Map from '../../pageElements/Geo/Map';

export default () => {

    return <>
        <GreyContainer>
            <div className="row">
                <div className="mx-auto text-center">
                    <h2 className="mb-4 mt-5" data-aos="fade-down" data-aos-duration="1000">Route Planner Test</h2>
                    <h3 className="mb-4" data-aos="fade-left" data-aos-duration="1000">sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
                </div>
            </div>
            <div className="row mt-3 mb-3"></div>
            <div className="row mb-5">
                <div className="col-12 d-flex justify-content-center">

                </div>
            </div>
            <div className="row pt-3 pb-3"></div>
        </GreyContainer>
        <WhiteContainerSmall>
            <div className="row">
                <Map/>
            </div>
        </WhiteContainerSmall>
    </>
};
