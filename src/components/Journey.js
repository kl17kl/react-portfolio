import React, { useState, useEffect, useRef } from 'react';
import styles from './modules/Journey.module.scss';
import useDraggableScroll from 'use-draggable-scroll';

function Journey(props) {

    let p = props.data;

    // Display different views based on viewport sizes
    const [scroll, setScroll] = useState(false);
    const displayScroll = () => {
        if (window.innerWidth <= 768)
            setScroll(true);
        else
            setScroll(false);
    }
    useEffect(() => { displayScroll(); }, []);
    window.addEventListener('resize', displayScroll);

    // Horizontal scrolling
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' });


    return (
        <>
        <div className={'container ' + styles['journey-container']}>
            <h1 className={'text-title'}>THE JOURNEY</h1>
            <div className={'accent-bar'}></div>
            
            <div className={scroll ? 'container d-flex pt-1 ' + styles['scroll-container'] : 'container d-flex pt-1'}  ref={scroll ? ref : null} onMouseDown={scroll ? onMouseDown : null} style={scroll ? {cursor: "default", userSelect:"auto"} : null}>
                <div id={'card-1'} className={scroll ? 'col-8 ' + styles['journey-card--left'] : 'col ' + styles['journey-card']}>
                    <p className={styles['journey-header']}>SITUATION</p>
                    <div className={styles['text-container']}>
                        <p className={styles['journey-text']}>
                        The owners of Mrs. Convenience have struggled to find a Point of Sale system that can best fit the needs of their business. Through their experiences, past systems have failed to properly support the management of their business. I decided to work together with the owners to design and implement a system that would tackle their pain points and provide them with the best platform to elevate their business management.
                        </p>
                    </div>
                </div>

                <div id={'card-2'} className={scroll ? 'col-8 ' + styles['margin-left'] + ' '  + styles['journey-card'] : 'col ' + styles['margin-left'] + ' '  + styles['journey-card']}>
                    <p className={styles['journey-header--focus']}>
                        <span className={styles['highlight']}></span>
                        <span className={styles['header']}>PLANNING</span>
                    </p>
                    <div className={styles['text-container--focus']}>
                        <p className={styles['journey-text']}>
                        Through user interviewing, we identified the main requirements that either needed to be newly created or improved upon. Some  requirements include inventory tracking, insightful reporting, and mass product management. Currently, I am developing mockups and protoypes and testing them with our users to ensure the optimal experience. More user research and experience design methods will be used in this stage to fully understand their needs and achieve the best results possible.
                        </p>    
                    </div>
                </div>
                
                <div id={'card-3'} className={scroll ? 'col-8 ' + styles['margin-left'] + ' '  + styles['journey-card--right'] : 'col ' + styles['margin-left'] + ' '  + styles['journey-card']}>
                    <p className={styles['journey-header']}>IMPLEMENTATION</p>
                    <div className={styles['text-container']}>
                        <p className={styles['journey-text']}>
                        In the implementation stage, I will be bringing an approved design to life using front-end and back-end technologies such as HTML, React, MySQL, and Java. I will be communicating closely with the owners to build and present iterations of my system - making any necessary adjustments along the way - to build the perfect solution for their business.
                        </p>    
                    </div>  
                </div>

                <div className={scroll ? styles['fade-away'] + ' ' + styles['right']: ''}></div>
                <div className={scroll ? styles['fade-away'] + ' ' + styles['left'] : ''}></div>
            </div>
            <img src='images/dots.png' className={styles['dots-1']} />
            <img src='images/dots.png' className={styles['dots-2']} />
        </div>

        </>
    );
}

export default Journey;
