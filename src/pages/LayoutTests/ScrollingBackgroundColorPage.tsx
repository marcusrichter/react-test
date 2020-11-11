import React from 'react';
import WhiteContainer from '../../pageElements/Containers/WhiteContainer';
import TextTeaserHalfElement from '../../pageElements/HalfElements/TextTeaserHalfElement';

export default () => <>
    <WhiteContainer>
        <div className="row">
            <TextTeaserHalfElement></TextTeaserHalfElement>
            <TextTeaserHalfElement></TextTeaserHalfElement>
        </div>
        <div className="row mt-5 mb-5"></div>

    </WhiteContainer>
</>;
