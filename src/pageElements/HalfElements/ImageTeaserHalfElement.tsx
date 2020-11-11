import React from 'react';

export default (props: any) => {
    const styles = {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    };

    return <div className="col-12 col-lg-6 d-flex image-teaser-half-element" style={styles}>
        <div className="d-flex ml-5 mr-4 mt-4 flex-grow-0">
            <span>Then</span>
        </div>
    </div>
}
