import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PageContext from "./../contexts/PageContext";

interface Props {
    onClick?: string;
}
type Button = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;
const Button = (params: any) => <button {...params}></button>

const toggleMenu = (isActivated: any, setActivated: any) => {
    setActivated(!isActivated)
};

export default () => {
    const {sideMenuActivated, setSideMenuActivated} = React.useContext(PageContext);

    return <Button 
        onClick={() => toggleMenu(sideMenuActivated, setSideMenuActivated)} 
        className={clsx('navbar-toggler', !sideMenuActivated && 'collapsed')}
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
    </Button>;
};
