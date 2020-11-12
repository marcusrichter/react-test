import React from "react";

export default (props: any) => {
    const { images } = props;
    const dataAosModifiers: string[] = ['fade-right', 'fade-up', 'fade-left'];

    return <div className="row justify-content-around pt-5 pb-1">
        <div className="col-1 mx-auto image-heap">
            { images.map((image, index) => <img data-aos={dataAosModifiers[index]} data-aos-duration="1000" src={image}/>) }
        </div>
    </div>
};
