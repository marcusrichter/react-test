import React from 'react';

export default (props: any) => {
    const filteredProps = Object.keys(props)
    .filter(key => key !== 'children')
    .reduce((obj, key) => {
        obj[key] = props[key];

        return obj;
    }, {});

    console.info(JSON.stringify(filteredProps));

    return <div className="container-fluid white-container" {...filteredProps}>    
        {props.children}    
    </div>;
}
