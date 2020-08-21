import React from 'react';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import Button from './Buttons/Button';

export default (props: any) => <div className="card col-sm-12 col-md-12 col-lg-3 mb-3 grey-card text-card">
    <div className="card-body">
        <h5 className="card-title">Lorem Ipsum 1 <DirectionsBus></DirectionsBus></h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
            {props.children}
        </p>
        <Button slideRight="true" type="whiteOutlined" className="mt-5">
            assss
        </Button>
    </div>
</div>;