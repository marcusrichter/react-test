import React from 'react';
import Button from '@material-ui/core/Button';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import TextCard from './TextCard';


export default (props: any) => <div className="container-fluid grey-container">
    <div className="row justify-content-around pt-5">   
        {props.children}
    </div>    
</div>;
