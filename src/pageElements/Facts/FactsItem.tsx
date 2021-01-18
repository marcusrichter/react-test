import React from 'react';
import CountUp from "react-countup";

export default (props: any) => {
    return           <div className="mr-4 ml-4 facts-counter">
        <h5 className="text-muted">
            {props.title}{props.icon}
        </h5>
        <CountUp start={0} end={props.value} delay={0} >
            {({ countUpRef }) => (
                <h6 ref={countUpRef}/>
            )}
        </CountUp>
    </div>;
}
