import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './modules/Footer.module.scss'

function Footer() {

    const navigate = useNavigate();
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const returnHome = () => {
        var area = document.getElementById('white-screen');
        area.style.height = '100vh';
        area.classList.add('transition-in');
        window.scrollTo(0, 0);

        sleep(2200).then(() => {
            navigate('/');
        });
    }

    return (
        <>
        <div className={'container-fluid ' + styles['footer-container']}>
            <button className={styles['footer-button']} onClick={returnHome}>Back to Projects</button>
            <p className={styles['footer-text']}>Developed and designed my project portfolio using React, Scss, and HTML5.</p>
        </div>
        </>
    );
}

export default Footer;