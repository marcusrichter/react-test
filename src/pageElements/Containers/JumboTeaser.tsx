import React from 'react';


export default (props: any) => {
    const styles = { 
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.backgroundImage})`,
        backgroundSize: 'cover'
    };

    return <div className="container-fluid jumbo-teaser" style={styles}>
        <div className="row justify-content-center">
            {props.children}
        </div>    
    </div>
};
