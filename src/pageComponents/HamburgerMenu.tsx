import React, { useState, useEffect } from 'react';

interface Props{
    onClick?: string; 
}
type Button = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;
const Button = (params: any) => <button {...params}></button>

const toggleMenu = (isActivated: boolean, setActivated: any) => {
    alert('x');
    setActivated(!isActivated)
};

export default () => {
    const [isActivated, setActivated] = useState(false);

    return <Button onClick={() => toggleMenu(isActivated, setActivated)} className="navbar-toggler collapsed" type="button" 
    data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" 
    aria-expanded="false" aria-label="Toggle navigation" >
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>				
    </Button>;
};
