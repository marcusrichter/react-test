import clsx from 'clsx';
import React from 'react';

export default (props: any) => {    
    const { slideRight, type, className, onClick, submit } =  props;
    
    let typeClass = 'btn-white-outlined';
    //className = className ? className : '';

    switch (type) {
        case 'whiteOutlined':
            typeClass = 'btn-white-outlined';
            break;
        case 'yellowFilled':
            typeClass = 'btn-yellow-filled';
            break;    
    }

    if (submit) {
        return <button type="submit" onClick={onClick ? () => onClick() : () => {}} className={clsx('card-link btn', slideRight && 'slide slide_right', typeClass, className)}>
            {props.children}
        </button>;
    }
    
    return <a onClick={onClick ? () => onClick() : () => {}} className={clsx('card-link btn', slideRight && 'slide slide_right', typeClass, className)}>
            {props.children}
        </a>;
};
