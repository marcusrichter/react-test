import React from 'react';

export default (props: any) => <div className="container-fluid grey-container">
    <div className="row justify-content-around pt-5">   
        {props.children}
    </div>    
</div>;
