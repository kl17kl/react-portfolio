import React from 'react';
import { Link } from 'react-router-dom';
import './Transition.scss';


const transition = () => {
    var area = document.getElementById('white-screen');
    area.style.height = '20em';
}

export const Transition = ({
    to,
    onClick,
    className,
    children
}) => {

    return (
        <Link to={to} className={className} onClick={onClick + ' ' + transition}>
            {children}
        </Link>
    )
}
