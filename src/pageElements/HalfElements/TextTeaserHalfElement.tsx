import React from 'react';

export default (props: any) => <div className="col-12 col-lg-6 d-flex text-teaser-half-element justify-content-center">
    <div className="d-flex ml-5 mr-4 mt-4 flex-grow-0">
        <span>{props.infoText}</span>
    </div>
    <div className="d-flex flex-column flex-grow-1 justify-content-end ml-2 pb-4">
        <div>{props.teaserText}</div>
        <div>{props.endTeaserText}</div>
    </div>
</div>;
