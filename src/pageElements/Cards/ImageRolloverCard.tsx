import React from 'react';

export default (props: any) => {
    return <div className="card col-sm-12 col-md-12 col-lg-3 mb-3 image-rollover-card">
    <img className="card-img-top" src="{props.image}"/>
    <div className="card-body">                
        <h5 className="card-title" data-aos="fade-left" data-aos-duration="1000">
            {props.title}
        </h5>
        <p className="card-text">
            {props.teaserText}
        </p>
        <a href="#" data-aos="fade-up" data-aos-duration="1000">Mehr erfahren</a>
        <div className="rollover-layer card">
            <div className="card-body d-flex flex-column">                
                <h5 className="card-title">
                    {props.title}
                </h5>
                <p className="card-text">
                    {props.children}
                </p>

                <div className="mt-auto">
                    <a href="#">
                        Mehr...
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>;

}
