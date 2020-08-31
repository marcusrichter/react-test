import React from 'react';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import Button from '../Buttons/Button';

export default (props: any) => <div className="card col-sm-12 col-md-12 col-lg-3 mb-3 grey-card text-card">
    <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}<DirectionsBus></DirectionsBus></h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
        <p className="card-text mb-4">
            {props.children}
        </p>
        <div className="mt-auto">
            <Button slideRight="true" type="whiteOutlined">
                {props.buttonText}
            </Button>
        </div>
    </div>
</div>;
