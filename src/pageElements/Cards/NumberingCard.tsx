import React from 'react';

export default (props: any) => <div className="col-sm-12 col-md-6 col-lg-4 mb-4 numbering-card">
    <h3 className="mb-3">
        <span className="number">{props.number}</span>
        {props.title}
    </h3>
    <p>{props.children}</p>
</div>;
