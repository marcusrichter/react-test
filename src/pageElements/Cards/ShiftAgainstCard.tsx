import React from 'react';
import clsx from 'clsx';

export default (props: any) => {
    const { reverse, children, title, subTitle, image} = props;

    return <div className="col-12 col-lg-10 offset-lg-1 shift-againts-card">
        <div className={clsx('row align-items-lg-center', reverse && 'flex-md-row-reverse')}>
            <div className="col-12 col-md-4 offset-md-1 col-lg-5 offset-lg-0" data-aos="fade-down" data-aos-duration="1500">
                <img src={image} alt="floor Ad" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 col-lg-4 offset-lg-0" data-aos="fade-up" data-aos-duration="1500">
                <h4>{title}</h4>
                <h2>{subTitle}</h2>
                <p>{children}</p>
            </div>
        </div>
    </div>
};
