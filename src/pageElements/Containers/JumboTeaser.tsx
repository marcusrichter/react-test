import React from 'react';


export default (props: any) => <div className="container-fluid jumbo-teaser">
    <div className="row justify-content-center">
        {props.children}
    </div>    
</div>;
