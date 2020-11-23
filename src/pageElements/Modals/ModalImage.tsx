import React from 'react';
import {Modal} from "react-responsive-modal";
import {ModalImageData} from "./Data/ModalImageData";

type ModalImageProps = {
    data: ModalImageData|null,
    onClose: () => void;
}

export default (props: ModalImageProps) => {
    const {data, onClose} = props;

    return <>
    <Modal open={data !== null} onClose={onClose} center={true}>
        <h3 className="text-center mb-3">{data && data.title}</h3>
        <p>
            <img src={data ? data.image : ''}/>
        </p>

        <p>
            {data && data.description}
        </p>
    </Modal>
</>};
