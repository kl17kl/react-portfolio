import React, { useState, useEffect } from 'react';
import Overview from '../Overview.js';
import Image from '../Image.js';
import Footer from '../Footer.js';
import stylesHome from './modules/Home.module.scss';
import styles from './modules/HVAD.module.scss';

function HVAD(props) {

    let p = props.data;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function loadTransition() {
        var area = document.getElementById('main-container');
        area.style.top = '20em';
    }

    return (
        <>
        <div id={'main'}>
            <div className={'main-project-container'}>
                <div className={stylesHome['project-container'] + ' container-fluid p-0'} style={{top:'1em', overflow:'hidden'}}>
                    <div className={stylesHome['projects'] + ' d-flex justify-content-center'} styles={{cursor: "default"}} >
                        <div><p className={styles['project--label']}>{p.label}</p></div>
                        <label className={stylesHome['project']} styles={{cursor: "default"}} htmlFor={stylesHome['item-1']} id={stylesHome['project-1']}>
                            <Image className={styles['background-image']} src={p.image.webp} fallback={p.image.fallback} alt={p.image.alt} onLoad={loadTransition} />                        
                        </label>
                    </div>
                </div>
            
                <div id='main-container' className={styles['main-container'] + ' container-fluid p-0'}>

                    {<Overview data={p} />}

                    <div className={'container message'}>
                        Hi there! Sorry for the inconvenience, this page is currently being worked on. This page should be completed within a few days. Feel free to check out the rest of the site in the meantime.
                    </div>

                    {<Footer />}

                </div>
            </div>
            <div id={'white-screen'}></div>
        </div>
        </>
    );
}

export default HVAD;
