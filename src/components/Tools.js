import React, { useState, useEffect } from 'react';
import styles from './modules/Tools.module.scss';

function Tools() {

    // Display different views based on viewport sizes
    const [mobile, setMobile] = useState(false);
    const displayMobile = () => {
        if (window.innerWidth <= 768)
            setMobile(true);
        else
            setMobile(false);
    }
    useEffect(() => { displayMobile(); }, []);
    window.addEventListener('resize', displayMobile);


    return (
        <>
        <div className={'container ' + styles['tools-container']}>
            <h1 className={'text-title'}>THE STACK</h1>
            <div className={'accent-bar'}></div>
            <p className={'text-subtitle'}>DESIGN, APPLICATION, AND DATA TOOLS</p>

            <div className={'container pt-1'}>
                <div className={'d-flex ' + styles['tools-icons'] }>
                    <img src='/images/figma-icon.png' className={'col'} alt='Figma icon' />
                    <img src='/images/html-icon.png' className={'col'} alt='HTML icon' />
                    <img src='/images/sass-icon.png' className={'col'} alt='Sass icon' />
                    <img src='/images/react-icon.png' className={mobile ? 'd-none' : 'col'} alt='React icon' />
                    <img src='/images/java-icon.png' className={mobile ? 'd-none' : 'col'} alt='Java icon' />
                    <img src='/images/mysql-icon.png' className={mobile ? 'd-none' : 'col'} alt='MySQL icon' />
                </div>
                <div className={'d-flex ' + styles['tools-labels']}>
                    <p className={'col'}>Figma</p>
                    <p className={'col'}>HTML5</p>
                    <p className={'col'}>Sass</p>
                    <p className={mobile ? 'd-none' : 'col'}>React</p>
                    <p className={mobile ? 'd-none' : 'col'}>Java</p>
                    <p className={mobile ? 'd-none' : 'col'}>MySQL</p>
                </div>
                <div className={'d-flex ' + styles['tools-icons'] }>
                    <img src='/images/react-icon.png' className={mobile ? 'col' : 'd-none'} alt='React icon' />
                    <img src='/images/java-icon.png' className={mobile ? 'col' : 'd-none'} alt='Java icon' />
                    <img src='/images/mysql-icon.png' className={mobile ? 'col' : 'd-none'} alt='MySQL icon' />
                </div>
                <div className={'d-flex ' + styles['tools-labels']}>
                    <p className={mobile ? 'col' : 'd-none'}>React</p>
                    <p className={mobile ? 'col' : 'd-none'}>Java</p>
                    <p className={mobile ? 'col' : 'd-none'}>MySQL</p>
                </div>
            </div>

            <img src='images/dots.png' className={styles['dots-1']} />
        </div>

        </>
    );
}

export default Tools;
